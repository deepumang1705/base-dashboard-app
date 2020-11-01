import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = environment.baseUrl + '/register';
  constructor(private _http : HttpClient) { }

  register(userData) {
    console.log('Message', this._url);
    return this._http.post<any>("/api/register", userData)
  }

  registerGet() {
    console.log('Received');
    return this._http.get<any>(this._url)
  }
}
