import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomFormGroup } from '../app.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-form-child',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './form-child.component.html',
  styleUrl: './form-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormChildComponent {
  formGroup = input.required<CustomFormGroup>();
}
