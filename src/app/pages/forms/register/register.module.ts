import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "./register.component";
import { ReactiveFormsModule } from '@angular/forms';

const FORM_VALIDATION_ROUTE = [{ path: '', component: RegisterComponent }]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FORM_VALIDATION_ROUTE),
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
