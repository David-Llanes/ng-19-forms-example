import { inject, Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

import { DataType } from '../models/common.models';
import { MedicalNoteField } from '../models/note-field.model';

@Injectable({
  providedIn: 'root',
})
export class FieldControlService {
  private fb = inject(NonNullableFormBuilder);

  toFormGroup(medicalNoteFields: MedicalNoteField[]) {
    const group: Record<MedicalNoteField['id'], FormControl<string>> = {};

    // REQUIRED EN BASE DE DATOS?
    medicalNoteFields.forEach(field => {
      group[field.id] =
        field.dataTypeId === DataType.Combobox
          ? this.fb.control('', Validators.required)
          : this.fb.control('');
    });

    return new FormGroup(group);
  }
}
