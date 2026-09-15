import { Component, forwardRef, viewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AttributesDirective, BaseControl } from '@piying/view-angular';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './component.html',
  imports: [FormsModule, AttributesDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxFCC),
      multi: true,
    },
  ],
})
export class InputCheckboxFCC extends BaseControl<boolean> {
  static __version = 2;
  templateRef = viewChild.required('templateRef');
}
