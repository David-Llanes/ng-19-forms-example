import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataType } from '../models/common.models';
import { MedicalNoteField } from '../models/note-field.model';

@Injectable({
  providedIn: 'root',
})
export class FieldControlService {
  toFormGroup(medicalNoteFields: MedicalNoteField[]) {
    const group: any = {};

    // REQUIRED EN BASE DE DATOS?
    medicalNoteFields.forEach(field => {
      group[field.id] =
        field.dataTypeId === DataType.Combobox
          ? new FormControl('', Validators.required)
          : new FormControl('');
    });

    return new FormGroup(group);
  }
}
