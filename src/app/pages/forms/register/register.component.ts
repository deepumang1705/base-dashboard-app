import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { RegistrationService } from './registration.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  get firstName() {
    return this.registrationForm.get('firstName');
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: ['',Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    address: [''],
    phone: [''],
    check: ['']
  },{validator: PasswordValidator});


onSubmit() {
  console.log(this.registrationForm.value);
  this._registrationService.register(this.registrationForm.value)
  .subscribe(
    response => {console.log('Success!')},
    error => console.log('Error!', error)
  )
  this.registrationForm.reset();
}

  ngOnInit() {
  }

}
