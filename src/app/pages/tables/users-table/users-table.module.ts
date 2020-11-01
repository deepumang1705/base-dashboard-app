import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';


import { UsersTableComponent } from "./users-table.component";

const USERS_TABLE_ROUTE = [{ path: "", component: UsersTableComponent }];

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    RouterModule.forChild(USERS_TABLE_ROUTE),
  ]
})
export class UsersTableModule {}
