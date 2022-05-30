import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { AbstractFacade } from 'src/app/store/abstract.facade';
import { INITIAL_USERS_STATE, IUsers, IUserStore, UserDataSource } from '../model/user.model';

let _state: IUserStore = INITIAL_USERS_STATE;

@Injectable()
export class UsersFacade extends AbstractFacade<IUserStore> {

  getInitialState(): IUserStore {
    return _state;
  }
  updateLocalState(state: IUserStore): IUserStore {
    return _state = state;
  }
  getStateSnapShot(): IUserStore {
    return _state;
  }

  constructor(private _dataSource: UserDataSource) {
    super();
  }

  /**
   * State
   */
  users$ = this.propertyObservable(state => state.users);

  state$: Observable<IUserStore> = combineLatest([
    this.users$
  ]).pipe(map(([users]) => (
    {
      users
    }
  )));


  initfacade = () => {
    this._getUsers();
  }


  private _getUsers = () => {
    this._dataSource.getUsers()
      .subscribe((users: IUsers[]) => {
        this.updateState({ ..._state, users });
      })
  }

  createUser(user: Omit<IUsers, "id">): void {
    console.log(user);
    this._dataSource.createUser(user)
      .subscribe((newUser: IUsers) => {
        this._getUsers()
      })
  }

  deleteUser(userId: number): void {
    this._dataSource.deleteUser(userId)
      .subscribe(() => {
        this._getUsers();
      })
  }

  editUser(userId: number, user: Omit<IUsers, "id">): void {
    this._dataSource.editUser(userId, user)
      .subscribe((user: IUsers) => {
        this.updateState({
          ..._state, users: [
            ..._state.users.map((_user: IUsers) => (_user.id === user.id ? user : _user))
          ]
        })
      })
  }

}
