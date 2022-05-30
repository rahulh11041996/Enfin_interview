import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/shared/service/modal.service';
import { IUsers, UserDataSource } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { UsersFacade } from '../../userStore/users.facade';

@Component({
  selector: 'enfin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    UsersFacade,
    { provide: UserDataSource, useClass: UserService }
  ]
})
export class UsersComponent implements OnInit {

  @ViewChild('edituser') _editUserTemplateRef!: TemplateRef<any>

  @ViewChild('deleteUser') _deleteUserTemplateRef!: TemplateRef<any>

  constructor(private _facade: UsersFacade, private _modalService: ModalService) { }

  store$ = this._facade.state$;

  editUser!: IUsers;

  ngOnInit(): void {
    this._facade.initfacade()
  }

  onEdit(users: IUsers): void {
    this.editUser = users;
    this._modalService.showModel(this._editUserTemplateRef)
  }

  onDelete(users: IUsers): void {
    this.editUser = users;
    this._modalService.showModel(this._deleteUserTemplateRef);
  }

  closeModal(): void {
    this._modalService.close();
  }

  deleteSelectedUser(): void {
    this._facade.deleteUser(this.editUser.id);
    this.closeModal()
  }

}
