import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NoteTypeService } from '../services/note-type.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medical-note',
  imports: [RouterLink],
  template: `
    <div>
      @for (item of noteTypes.value(); track $index) {
        <a [routerLink]="['note', item.id]">{{ item.name }}</a>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MedicalNoteComponent {
  private service = inject(NoteTypeService);

  noteTypes = rxResource({
    loader: () => this.service.getAll(),
  });
}
