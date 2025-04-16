import { MedicalNoteField } from './note-field.model';

export interface BaseMedicalNote {
  name: string;
  description?: string;
}

export interface MedicalNoteType extends BaseMedicalNote {
  id: number;
}

export interface MedicalNoteTypeWithFields extends MedicalNoteType {
  medicalNoteFields: MedicalNoteField[];
}
