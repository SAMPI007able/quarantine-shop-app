import { FormGroup, FormControl, Validators } from '@angular/forms'

export class IdmModel {
    getLoginModel(){
        return new FormGroup({
            email : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
        })
    }

    getRegistrationModel(){
        return new FormGroup({
            fname : new FormControl('', Validators.required),
            email : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
        })
    }
}
