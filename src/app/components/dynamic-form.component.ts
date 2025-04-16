import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldControlService } from '../services/field-control.service';
import { MedicalNoteField } from '../models/note-field.model';
import { DynamicFieldComponent } from './dynamic-field.component';

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFieldComponent],
  template: `
    <div>
      <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div>
          <h1>STATIC</h1>
          @for (field of staticFields(); track field) {
            <div class="form-row">
              <app-dynamic-field [field]="field" [form]="form" />
            </div>
          }
        </div>

        <div>
          <h1>CUSTOM</h1>
          @for (field of customFields(); track field) {
            <div class="form-row">
              <app-dynamic-field [field]="field" [form]="form" />
            </div>
          }
        </div>

        <div class="form-row">
          <button type="submit" [disabled]="form.invalid">Submit</button>
        </div>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  private readonly formService = inject(FieldControlService);

  fields = input<MedicalNoteField[]>([]);

  form!: FormGroup;

  customFields = computed(() => this.fields().filter(note => note.medicalUnitId));

  staticFields = computed(() => this.fields().filter(note => !note.medicalUnitId));

  ngOnInit(): void {
    this.form = this.formService.toFormGroup(this.fields());
  }

  onSubmit() {
    console.log('Form Submitted!', this.form.value);
    console.log(
      Object.entries(this.form.value).map(([key, value]) => ({
        id: +key,
        value: value,
      }))
    );
  }
}
