import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { DataType } from '../models/common.models';
import { MedicalNoteField } from '../models/note-field.model';

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
        <option value="" selected>Selecciona una opción</option>
        @for (option of noteField().medicalNoteFieldOptions; track $index) {
          <option [value]="option.fieldOptionName">
            {{ option.fieldOptionName }}
          </option>
        }
      </select>
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
  control = input.required<any>();
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
