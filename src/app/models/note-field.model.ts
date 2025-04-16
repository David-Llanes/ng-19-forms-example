import { DataType, Status } from './common.models';
import { MedicalNoteFieldOption } from './field-option.model';

export interface MedicalNoteField {
  id: number;
  fieldName: string;
  description?: string;
  dataTypeId: DataType.Combobox | DataType.Text;
  medicalUnitId?: string;
  status: Status;
  medicalNoteFieldOptions: MedicalNoteFieldOption[];
}
