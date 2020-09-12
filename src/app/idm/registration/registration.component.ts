import { Component, OnInit } from '@angular/core';
import { IdmService } from './../service/idm.service';
import { FormGroup } from '@angular/forms';
import { IdmModel } from './../model/idm-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupFormGroup: FormGroup;
  invalid: boolean;
  constructor( public model: IdmModel, public service: IdmService ) {
    this.signupFormGroup = model.getRegistrationModel();
  }

  ngOnInit(): void {
  }

  doValidateRegistration(): void{
    if( this.signupFormGroup.invalid ){
      this.invalid = true ;
    } else{
      this.service.conf.doHttpPostCall('user/register', this.signupFormGroup.value)
        .subscribe((resp : {status: boolean, msg: string}) => {
          if( resp.status === true ){
            alert('success');
            this.invalid = false ;
          } else{
            alert('failure');
            this.invalid = true ;
          }
        })
    }
  }
}
