import { Injectable } from '@angular/core';
import { IUsers, UserDataSource } from '../model/user.model';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { ApiRoutes } from '../routes/api.routes';

@Injectable()
export class UserService implements UserDataSource {

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    return this._http.get(ApiRoutes.API_GET_USERS).pipe(map((response: any) => (response.data)))
  }

  createUser(user: Omit<IUsers, "id">): Observable<IUsers> {
    return this._http.post(ApiRoutes.API_CREATE_USERS, { ...user }).pipe(map((response: any) => (response.data)));
  }

  deleteUser(userId: number): Observable<any> {
    return this._http.delete(ApiRoutes.API_UPDATE_USERS(userId))
  }

  editUser(userId: number, user: Omit<IUsers, "id">): Observable<IUsers> {
    return this._http.put(ApiRoutes.API_UPDATE_USERS(userId), { ...user }).pipe(map((response: any) => (response.data)));
  }
}
