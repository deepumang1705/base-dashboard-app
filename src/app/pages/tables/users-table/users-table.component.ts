import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {

  options: DataTables.Settings = {};
  pageTitle: string = "Registered Users";
  pageSubTitle: string = "Here is the paginated   data table of all registered Users";

  columns: Array<any> = [
    {
      title: "ID",
      name: "id"
    },
    {
      title: "First Name",
      name: "first_name"
    },
    {
      title: "Last Name",
      name: "last_name"
    },
    {
      title: "Email Address",
      name: "email"
    },
    {
      title: "Password",
      name: "password"
    },
    {
      title: "Address",
      name: "address"
    },
    {
      title: "Contact",
      name: "phone"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.options = {
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      processing: true,
      serverSide: true,
      ajax: function(parameters: any, callback) {
        console.log(parameters)
        // make a regular ajax request using data.start and data.length
        $.get('https://bogus-rest-api.herokuapp.com/users/', {
          _limit: parameters.length,
          _page: Math.ceil(parameters.start/parameters.length) + 1,
          q: parameters.search.value
        }, function(res) {
          callback({
            recordsTotal: 200,
            recordsFiltered: 200,
            data: res,
          });
        });
      },
      columns: [
        {data: "id"},
        {data: "first_name"},
        {data: "last_name"},
        {data: "email"},
        {data: "gender"},
        {data: "ip_address"}
      ]
  }
}
}
