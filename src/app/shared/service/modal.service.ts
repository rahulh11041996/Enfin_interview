import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable()
export class ModalService {

  constructor(private _dialog: MatDialog) { }

  showModel(template: TemplateRef<HTMLTemplateElement>): void {
    this._dialog.open(ModalComponent, {
      data: {
        template
      }
    })
  }

  close(): void {
    this._dialog.closeAll();
  }
}
