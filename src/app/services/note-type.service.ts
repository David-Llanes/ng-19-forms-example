import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataType, MedicalNoteTypeEnum, Status } from '../models/common.models';
import { MedicalNoteType, MedicalNoteTypeWithFields } from '../models/note-type.model';

@Injectable({
  providedIn: 'root',
})
export class NoteTypeService {
  MEDICAL_NOTE_TYPES: MedicalNoteTypeWithFields[] = [
    {
      id: MedicalNoteTypeEnum.Initial,
      name: 'Nota Inicial',
      description: 'Registro médico inicial con antecedentes y motivo de consulta.',
      medicalNoteFields: [
        {
          id: 1,
          fieldName: 'Motivo de ingreso',
          description: 'Razón principal del ingreso del paciente',
          dataTypeId: DataType.Text,
          medicalUnitId: '019538b5-0d62-7673-b712-0bc17127c78b',
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
        {
          id: 2,
          fieldName: 'Nivel de conciencia',
          description: 'Evaluación del estado de conciencia',
          dataTypeId: DataType.Combobox,
          status: Status.Active,
          medicalNoteFieldOptions: [
            { id: 1, fieldOptionName: 'Alerta' },
            { id: 2, fieldOptionName: 'Somnoliento' },
            { id: 3, fieldOptionName: 'Inconsciente' },
          ],
        },
        {
          id: 31,
          fieldName: 'Antecedentes personales',
          description: 'Historia médica previa del paciente',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
      ],
    },
    {
      id: MedicalNoteTypeEnum.Admission,
      name: 'Nota de Ingreso',
      description: 'Registro detallado al momento de la hospitalización del paciente.',
      medicalNoteFields: [
        {
          id: 13,
          fieldName: 'Signos vitales al ingreso',
          description: 'Registro de signos vitales en el momento de la admisión',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
        {
          id: 14,
          fieldName: 'Condición general',
          description: 'Descripción del estado general del paciente',
          dataTypeId: DataType.Combobox,
          status: Status.Active,
          medicalNoteFieldOptions: [
            { id: 19, fieldOptionName: 'Estable' },
            { id: 20, fieldOptionName: 'Delicado' },
            { id: 21, fieldOptionName: 'Grave' },
          ],
          medicalUnitId: '0195b4e3-5943-7778-9886-1cbfa6296fe5',
        },
        {
          id: 32,
          fieldName: 'Diagnóstico inicial',
          description: 'Diagnóstico al momento de ingreso',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
      ],
    },
    {
      id: MedicalNoteTypeEnum.Referral,
      name: 'Nota de Referencia',
      description:
        'Documento para referir al paciente a otro especialista o institución.',
      medicalNoteFields: [
        {
          id: 9,
          fieldName: 'Especialidad referida',
          description: 'Área médica a la que se refiere al paciente',
          dataTypeId: DataType.Combobox,
          status: Status.Active,
          medicalNoteFieldOptions: [
            { id: 13, fieldOptionName: 'Cardiología' },
            { id: 14, fieldOptionName: 'Neurología' },
            { id: 15, fieldOptionName: 'Pediatría' },
          ],
          medicalUnitId: '0195b4e3-5943-7778-9886-1cbfa6296fe5',
        },
        {
          id: 10,
          fieldName: 'Motivo de referencia',
          description: 'Razón por la que se deriva al paciente',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
        {
          id: 33,
          fieldName: 'Estudios realizados',
          description: 'Pruebas realizadas previas a la referencia',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
      ],
    },
    {
      id: MedicalNoteTypeEnum.Interconsultation,
      name: 'Nota de Interconsulta',
      description:
        'Solicitud de opinión médica de otro especialista durante la hospitalización.',
      medicalNoteFields: [
        {
          id: 11,
          fieldName: 'Especialidad solicitada',
          description: 'Especialidad médica requerida para la interconsulta',
          dataTypeId: DataType.Combobox,
          status: Status.Active,
          medicalNoteFieldOptions: [
            { id: 16, fieldOptionName: 'Gastroenterología' },
            { id: 17, fieldOptionName: 'Traumatología' },
            { id: 18, fieldOptionName: 'Dermatología' },
          ],
          medicalUnitId: '019538b5-0d62-7673-b712-0bc17127c78b',
        },
        {
          id: 12,
          fieldName: 'Resumen clínico',
          description: 'Breve resumen del estado actual del paciente',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
        {
          id: 34,
          fieldName: 'Justificación',
          description: 'Motivo específico de la solicitud',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
      ],
    },
    {
      id: MedicalNoteTypeEnum.Evolution,
      name: 'Nota de Evolución',
      description: 'Seguimiento y evolución del paciente en el tratamiento.',
      medicalNoteFields: [
        {
          id: 3,
          fieldName: 'Síntomas actuales',
          description: 'Descripción de los síntomas recientes',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
        {
          id: 4,
          fieldName: 'Respuesta al tratamiento',
          description: 'Evaluación del progreso con tratamiento',
          dataTypeId: DataType.Combobox,
          medicalUnitId: '0195b4e3-5943-7778-9886-1cbfa6296fe5',
          status: Status.Active,
          medicalNoteFieldOptions: [
            { id: 4, fieldOptionName: 'Mejoría' },
            { id: 5, fieldOptionName: 'Sin cambios' },
            { id: 6, fieldOptionName: 'Empeoramiento' },
          ],
        },
        {
          id: 35,
          fieldName: 'Indicaciones médicas',
          description: 'Tratamientos o recomendaciones nuevas',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
      ],
    },
    {
      id: MedicalNoteTypeEnum.Discharge,
      name: 'Nota de Egreso',
      description: 'Resumen del estado del paciente y recomendaciones al alta médica.',
      medicalNoteFields: [
        {
          id: 5,
          fieldName: 'Diagnóstico final',
          description: 'Diagnóstico al momento del egreso',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
        {
          id: 6,
          fieldName: 'Condición al egreso',
          description: 'Estado del paciente al salir',
          dataTypeId: DataType.Combobox,
          medicalUnitId: '0195b4e3-5943-7778-9886-1cbfa6296fe5',
          status: Status.Active,
          medicalNoteFieldOptions: [
            { id: 7, fieldOptionName: 'Estable' },
            { id: 8, fieldOptionName: 'Delicado' },
            { id: 9, fieldOptionName: 'Crítico' },
          ],
        },
        {
          id: 36,
          fieldName: 'Recomendaciones al egreso',
          description: 'Cuidados o seguimiento post-egreso',
          dataTypeId: DataType.Text,
          status: Status.Active,
          medicalNoteFieldOptions: [],
        },
      ],
    },
  ];

  getAll(): Observable<MedicalNoteType[]> {
    const simpleNoteTypes: MedicalNoteType[] = this.MEDICAL_NOTE_TYPES.map(note => ({
      id: note.id,
      name: note.name,
      description: note.description,
    }));

    return of(simpleNoteTypes);
  }

  getById(id: MedicalNoteTypeEnum): Observable<MedicalNoteTypeWithFields> {
    const noteType = this.MEDICAL_NOTE_TYPES.find(note => note.id === id);

    if (!noteType) {
      throw new Error('Note type not found');
    }

    return of(noteType);
  }
}
