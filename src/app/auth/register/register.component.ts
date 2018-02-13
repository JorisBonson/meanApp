import { Component, OnInit } from '@angular/core';
import {AuthRegisterService, AlertService} from '../../services/auth-register.service';
import {Router} from '@angular/router';

import {ValidationMessage} from '../../models/validationMessage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private  registerService: AuthRegisterService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }


  register() {
    this.loading = true;
    this.registerService.create(this.model)
      .subscribe(
        data => {  const returnedMessage = <ValidationMessage> data;

        if (returnedMessage.success){
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        }else{
          this.alertService.error(returnedMessage.msg);
        }






        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
