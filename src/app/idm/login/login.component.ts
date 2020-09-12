import { IdmService } from './../service/idm.service';
import { FormGroup } from '@angular/forms';
import { IdmModel } from './../model/idm-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  invalid: boolean;
  constructor( public model: IdmModel, public service: IdmService ) {
    this.loginFormGroup = model.getLoginModel();
  }

  ngOnInit(): void {
  }

  doValidateLogin(): void{
    if( this.loginFormGroup.invalid ){
      this.invalid = true ;
    } else{
      this.service.conf.doHttpPostCall('user/login', this.loginFormGroup.value)
        .subscribe((resp : {status: boolean, msg: string}) => {
          if( resp.status === true ){
            this.service.setLoggedIn();
            this.service.conf.doNavigate('prod/list');
            this.invalid = false ;
          } else{
            alert('failure');
            this.invalid = true ;
          }
        })
    }
  }
}
