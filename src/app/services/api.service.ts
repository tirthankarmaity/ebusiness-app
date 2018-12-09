import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  fetch() {
    console.log('fetch API HITTED RIGHT');
    return this.http.get( `${this.baseUrl}/users`);
    }
  details(id) {
    console.log('details API HITTED RIGHT');
    return this.http.get( `${this.baseUrl}/users/${id}`);

  }

  upload(picture) {
    console.log('Upload API hitted');
    return this.http.post(`${this.baseUrl}/users/upload`, picture);

  }


}
