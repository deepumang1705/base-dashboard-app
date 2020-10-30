import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = environment.baseUrl + '/api/register'
  constructor(private _http : HttpClient) { }

  register(userData) {
    console.log('Message');
    return this._http.post<any>(this._url, userData)
  }
}
