import { Component, computed, inject, viewChild } from '@angular/core';
import {
  InsertFieldDirective,
  PI_VIEW_FIELD_TOKEN,
} from '@piying/view-angular';
import { fieldControlStatusClass } from '@piying/view-angular-core';
import { setGlobalConfig, summarize } from 'valibot';

@Component({
  selector: 'valid-wrapper',
  templateUrl: './component.html',
  imports: [InsertFieldDirective],
})
export class ValidWC {
  static __version = 2;
  templateRef = viewChild.required('templateRef');
  field$$ = inject(PI_VIEW_FIELD_TOKEN);
  props$$ = computed(() => this.field$$().props());
  errorStr$$ = computed(() => {
    const field = this.field$$();
    const valibot = field.form.control!.errors!['valibot'];
    if (valibot) {
      return summarize(valibot);
    } else {
      return Object.values(field.form.control!.errors!)
        .map((item) => (typeof item === 'string' ? item : JSON.stringify(item)))
        .join('\n');
    }
  });
  classStatus$$ = computed(() => {
    return fieldControlStatusClass(this.field$$().form.control);
  });
  isChangedStatus$$ = computed(
    () =>
      this.field$$().form.control?.dirty$$() ||
      this.field$$().form.control?.touched$$(),
  );
}
