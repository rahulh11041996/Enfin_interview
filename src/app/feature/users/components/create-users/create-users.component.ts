import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/service/modal.service';
import { IUsers } from '../../model/user.model';
import { UsersFacade } from '../../userStore/users.facade';

@Component({
  selector: 'enfin-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUsersComponent implements OnInit {

  userForm!: FormGroup;
  submitted: boolean = false;

  @Input() user!: IUsers;

  @Input() isEditMode: boolean = false;

  constructor(private _fb: FormBuilder, private _facade: UsersFacade, private _modalService: ModalService) {

  }

  ngOnInit(): void {
    this.userForm = this._fb.group({
      name: [this.isEditMode ? this.user.name : '', [Validators.required, Validators.minLength(3)]],
      gender: [this.isEditMode ? this.user.gender : 'male'],
      email: [this.isEditMode ? this.user.email : '', [Validators.required, Validators.email]],
      status: [this.isEditMode ? this.user.status : 'active']
    })
  }

  updateUser(): void {
    if (this.isEditMode) {
      this._facade.editUser(this.user.id, this.userForm.value);
      this._modalService.close();
    } else {
      this._facade.createUser(this.userForm.value)
    }
  }



}
