import { ChangeDetectionStrategy, Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule],
  template: `
    @let localControl = control();

    <input [formControl]="localControl" (blur)="onTouched()" />

    @if (localControl.invalid && (localControl.dirty || localControl.touched)) {
      <div class="error-message">
        @if (localControl.errors?.['required']) {
          <span>Este campo es obligatorio</span>
        }
      </div>
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent implements ControlValueAccessor {
  control = input.required<FormControl<any>>();

  onTouched = () => {};
  onChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }
}
