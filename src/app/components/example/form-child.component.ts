import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomFormGroup } from '../../app.component';
import { CustomInputComponent } from './custom-input.component';

@Component({
  selector: 'app-form-child',
  imports: [ReactiveFormsModule, CustomInputComponent],
  template: `
    @let formGroupLocal = formGroup();

    <div [formGroup]="formGroupLocal">
      <app-custom-input [control]="formGroupLocal.controls.name" formControlName="name" />
      <app-custom-input
        [control]="formGroupLocal.controls.value"
        formControlName="value"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormChildComponent {
  formGroup = input.required<CustomFormGroup>();
}
