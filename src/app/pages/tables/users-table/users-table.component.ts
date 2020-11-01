import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  singleToggle: any = '1';
  checkbox: any = {
    left: false,
    middle: true, right: false
  };
  radio: any = 'middle';


  options: DataTables.Settings = {};
  pageTitle: string = "Registered Users";
  pageSubTitle: string = "Here is the paginated   data table of all registered Users";

  columns: Array<any> = [
    {
      title: "ID",
      name: "_id"
    },
    {
      title: "First Name",
      name: "firstName"
    },
    {
      title: "Last Name",
      name: "lastName"
    },
    {
      title: "Email Address",
      name: "email"
    },
    {
      title: "Address",
      name: "address"
    },
    {
      title: "Contact",
      name: "phone"
    },
    {
      title: "Check",
      name: "check"
    }

  ];

  constructor() { }

  ngOnInit() {
    console.log("ng init...")
    this.options = {
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      processing: true,
      serverSide: true,
      ajax: function(parameters: any, callback) {
        // make a regular ajax request using data.start and data.length
        $.get(environment.baseUrl + '/users-table', {
          _limit: parameters.length,
          _page: Math.ceil(parameters.start/parameters.length) + 1,
          q: parameters.search.value
        }, function(res) {
          callback({
            recordsTotal: res.length,
            recordsFiltered: res.length,
            data: res,
          });
        });
      },
      columns: [
        {data: "_id"},
        {data: "firstName"},
        {data: "lastName"},
        {data: "email"},
        {data: "password"},
        {data: "phone"},
        {data: "check"}
      ]
  }
}
}
