import { Component, forwardRef, viewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AttributesDirective, BaseControl } from '@piying/view-angular';

@Component({
  selector: 'app-input-number',
  templateUrl: './component.html',
  imports: [FormsModule, AttributesDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberFCC),
      multi: true,
    },
  ],
})
export class InputNumberFCC extends BaseControl<number | null> {
  static __version = 2;
  templateRef = viewChild.required('templateRef');
}
