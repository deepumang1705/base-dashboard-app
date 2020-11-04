import { Subject } from "rxjs";
import { data, post } from "jquery";
import { environment } from "src/environments/environment";
import { DataTableDirective } from "angular-datatables";
import { RegistrationService } from "../../forms/register/registration.service";

import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
})
export class UsersTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();
  pageTitle: string = "Registered Users";
  pageSubTitle: string =
    "Here is the paginated   data table of all registered Users";

  userData = [];
  id: string;
  check: boolean;

  columns: Array<any> = [
    {
      title: "ID",
      name: "_id",
    },
    {
      title: "First Name",
      name: "firstName",
    },
    {
      title: "Last Name",
      name: "lastName",
    },
    {
      title: "Email Address",
      name: "email",
    },
    {
      title: "Contact",
      name: "phone",
    },
    {
      title: "Status",
      name: "check",
    },
  ];

  constructor(private service: RegistrationService) {}

  ngOnInit() {
    this.service.registerGet().subscribe((data) => {
      this.userData = data;
    });
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  deActivate(userId, Check) {
    this.service.registerPut(userId, Check).subscribe(
      (data) => {
        console.log(data), this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  activate(userId, Check) {
    this.service.registerPut(userId, Check).subscribe(
      (data) => {
        console.log(data), this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
