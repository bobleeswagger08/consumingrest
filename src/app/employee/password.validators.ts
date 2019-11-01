import { AbstractControl } from '@angular/forms';

export class PasswordValidators{
    static validPassword(control:AbstractControl){
        return new Promise((resolve)=>{
            if(control.value!="1")
                resolve ({invalidUserPassword:true});
            else
                resolve (null);
        })
    }
}