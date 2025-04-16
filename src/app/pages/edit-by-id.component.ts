import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { DynamicFormComponent } from '../components/dynamic-form.component';
import { MedicalNoteTypeWithFields } from '../models/note-type.model';
import { NoteTypeService } from '../services/note-type.service';

@Component({
  selector: 'app-edit-by-id',
  imports: [ReactiveFormsModule, DynamicFormComponent, RouterLink],
  template: `
    @if (noteType()) {
      <div>
        FORM
        <app-dynamic-form [fields]="noteType()?.medicalNoteFields ?? []" />
      </div>
    } @else {
      <a routerLink="/">Ir a home</a>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EditByIdComponent implements OnInit {
  private service = inject(NoteTypeService);

  id = input.required<number>();

  noteType = signal<MedicalNoteTypeWithFields | undefined>(undefined);

  ngOnInit(): void {
    this.service.getById(+this.id()).subscribe(noteType => {
      this.noteType.set(noteType);
    });
  }
}
