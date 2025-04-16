import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MedicalNoteField } from '../models/note-field.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataType } from '../models/common.models';
import { InputOrSelectComponent } from './input-or-select.component';

@Component({
  selector: 'app-dynamic-field',
  imports: [ReactiveFormsModule, InputOrSelectComponent],
  template: `
    @let control = form().controls[field().id];

    <div [formGroup]="form()">
      <label [attr.for]="field().id">{{ field().fieldName }}</label>
      <p>{{ field().description }}</p>
      <div>
        <app-input-or-select [control]="control" [noteField]="field()" />
      </div>

      @if (control.invalid && (control.dirty || control.touched)) {
        <div class="error-message">
          @if (control.errors?.['required']) {
            <i>Este campo es obligatorio</i>
          }
        </div>
      }
    </div>

    <br />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFieldComponent {
  field = input.required<MedicalNoteField>();

  form = input.required<FormGroup>();

  dataTypeId = DataType;
}
