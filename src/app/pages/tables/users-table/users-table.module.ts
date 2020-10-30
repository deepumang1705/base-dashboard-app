import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { UsersTableComponent } from "./users-table.component";

const USERS_TABLE_ROUTE = [{ path: "", component: UsersTableComponent }];

@NgModule({
  declarations: [UsersTableComponent],
  imports: [CommonModule, RouterModule.forChild(USERS_TABLE_ROUTE)]
})
export class UsersTableModule {}
