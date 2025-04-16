import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MedicalNoteField } from '../models/note-field.model';
import { DataType } from '../models/common.models';

@Component({
  selector: 'app-input-or-select',
  imports: [ReactiveFormsModule],
  template: `
    @let localControl = control();
    @let type = noteField().dataTypeId;

    @if (type === dataTypeId.Text) {
      <input [formControl]="localControl" (blur)="onTouched()" />
    }

    @if (type === dataTypeId.Combobox) {
      <select [formControl]="localControl">
        <option value="" disabled selected>Selecciona una opción</option>
        @for (option of noteField().medicalNoteFieldOptions; track $index) {
          <option [value]="option">
            {{ option }}
          </option>
        }
      </select>
    }

    @if (localControl.invalid && (localControl.dirty || localControl.touched)) {
      <div class="error-message">
        @if (localControl.errors?.['required']) {
          <span>Este campo es obligatorio</span>
        }
      </div>
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputOrSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOrSelectComponent implements ControlValueAccessor {
  control = input.required<FormControl<any>>();
  noteField = input.required<MedicalNoteField>();

  dataTypeId = DataType;

  onTouched = () => {};
  onChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }
}
