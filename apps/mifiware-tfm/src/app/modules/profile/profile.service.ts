import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '@mifiware-tfm/entity-data-models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private router: Router) {}

  getUser(id: string, token: string): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`, {
      headers,
    });
  }
}
