/**
 * Interfaces
 */

import { Observable } from "rxjs";

export interface IUsers {
    id: number;
    name: string;
    gender: string;
    email: string;
    status: USER_STATUS;
}

export interface IUserStore {
    users: IUsers[];
}

/**
 * Enums
 */
export enum USER_STATUS {
    ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE'
}

/**
 * constants
 */

export const INITIAL_USERS_STATE: IUserStore = {
    users: []
}


/**
 * abstract layer
 */

export abstract class UserDataSource {
    abstract getUsers(): Observable<IUsers[]>;
    abstract createUser(user: Omit<IUsers, "id">): Observable<IUsers>;
    abstract deleteUser(userId: number): Observable<any>;
    abstract editUser(userId: number, user: Omit<IUsers, "id">): Observable<IUsers>;

}