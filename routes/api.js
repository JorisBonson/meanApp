var mongoose = require('mongoose');
var passport = require('passport');
var config = require ('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/user');
var Film = require('../models/film');
var debug = require('debug')('myapi:server');

router.post('/signup', function (req, res) {
    if (!req.body.email || !req.body.password) {
        res.json({success: false, msg: 'Please pass email and password'});
    } else {
        var newUser = new User({
            email: req.body.email,
            password: req.body.password
        });
        newUser.save(function (err) {
            if (err) {
                console.log();
                return res.json({success: false, msg: 'email already exists'});
            }
            res.json({success: true, msg: 'Successfully created new user'})
        })
    }

});



router.post('/signin', function(req, res){
    User.findOne({
        email:req.body.email
    }, function (err, user) {
        if (err) {
            debug(err);
            throw err;
        }
        if(!user){
            res.status(401).send({success:false, msg:'Authentication failed. User not found.'});
        }else{
            //check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if(isMatch && !err){
                    var token = jwt.sign(user.toJSON(),config.secret);
                    res.json({success:true, token:'JWT ' + token});
                }else{
                    debug(err);
                    res.status(401).send({success:false, msg:'Authentication failed. User not found.'});
                }
            })
        }
    })
})

router.post('/film', passport.authenticate('jwt', {session:false}), function (req, res) {
    var token = getToken(req, headers);
    if(token){
        console.log(req, body);
        var newFilm = new Film({
            title: req.body.title,
            director: req.body.director,
            studio: req.body.studio,
            year: req.body.year,
            review: req.body.review,
            reviewer: req.body.reviewer,
            img: req.body.img
        });
        newFilm.save(function (err) {
            if(err){
                return res.json({success:false, msg:'Save film failed.'});
            }
            res.json({success:true, msg:'Successfully created new film'});
        });
    }else{
        return res.status(403).send({success: false, msg:'Unauthorized'});
    }
});

router.get('/film', passport.authenticate('jwt', {session:false}), function (req, res) {
    var token = getToken(req.headers);
    if(token){
        
    }
})

getToken = function (headers) {
    if(header && headers.authorization){
        var parted = header.authorization.split(' ');
        if(parted.length === 2){
            debug('First part of Authorization' + parted[0]);
            debug('JWT Token part of Authorization' + parted[1]);
            return parted[1];
        }else{
            return null;
        }
    }else{
        return null;
    }
};

module.exports = router;