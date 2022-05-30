import { Component, OnInit, ChangeDetectionStrategy, Inject, TemplateRef, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'enfin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  template!: TemplateRef<HTMLTemplateElement>;

  constructor(@Optional() private _dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: { template: TemplateRef<HTMLTemplateElement> }) {
    this.template = this._data.template;
  }

  ngOnInit(): void {
  }

}
