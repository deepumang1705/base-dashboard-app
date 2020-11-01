import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { UsersTableComponent } from "./users-table.component";
import { FormsModule } from '@angular/forms';

const USERS_TABLE_ROUTE = [{ path: "", component: UsersTableComponent }];

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    ButtonsModule.forRoot(),
    RouterModule.forChild(USERS_TABLE_ROUTE),
  ]
})
export class UsersTableModule {}
