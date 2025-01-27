import { Component, computed, effect, inject, signal } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormChildComponent } from './form-child/form-child.component';
import { toSignal } from '@angular/core/rxjs-interop';

export interface ItemForm {
  id: FormControl<number>;
  name: FormControl<string>;
  value: FormControl<number>;
}

export type CustomFormGroup = FormGroup<ItemForm>;

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private fb = inject(NonNullableFormBuilder);

  form: FormGroup<{ items: FormArray<CustomFormGroup> }> = this.fb.group({
    items: this.fb.array<CustomFormGroup>([]),
  });

  get items() {
    return this.form.controls.items;
  }

  itemChanges = toSignal(this.form.valueChanges);

  formValue = computed(() => {
    const value = this.itemChanges()?.items?.reduce(
      (total, item) => total + Number(item?.value) || 0,
      0
    );

    return value;
  });

  addItem() {
    const id = this.items.length + 1;
    const itemForm = this.fb.group<ItemForm>({
      id: this.fb.control(id),
      name: this.fb.control('', { validators: Validators.required }),
      value: this.fb.control(0, { validators: Validators.required }),
    });

    this.form.controls.items.push(itemForm);
  }
}
