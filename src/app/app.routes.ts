import { Routes } from '@angular/router';
import MedicalNoteComponent from './pages/medical-note.component';
import EditByIdComponent from './pages/edit-by-id.component';

export const routes: Routes = [
  {
    path: '',
    component: MedicalNoteComponent,
  },
  {
    path: 'note/:id',
    component: EditByIdComponent,
  },
];
