import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MedicalNoteField } from '../models/note-field.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataType } from '../models/common.models';

@Component({
  selector: 'app-dynamic-field',
  imports: [ReactiveFormsModule],
  template: `
    <div [formGroup]="form()">
      <label [attr.for]="field().id">{{ field().fieldName }}</label>
      <p>{{ field().description }}</p>
      <div>
        @switch (field().dataTypeId) {
          @case (dataTypeId.Text) {
            <input [formControlName]="field().id" [id]="field().id" />
          }

          @case (dataTypeId.Combobox) {
            <select [id]="field().id" [formControlName]="field().id">
              @for (opt of field().medicalNoteFieldOptions; track opt) {
                <option [value]="opt.fieldOptionName">
                  {{ opt.fieldOptionName }}
                </option>
              }
            </select>
          }
        }
      </div>

      @if (!isValid) {
        <div class="errorMessage">{{ field().fieldName }} is required</div>
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

  get isValid() {
    return this.form().controls[this.field().id].valid;
  }
}
