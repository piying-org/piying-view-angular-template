import { Component, computed, effect, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PiyingFieldControlBindDirective,
  PiyingFieldTemplateDirective,
} from '@piying/view-angular';
import { PI_VIEW_FIELD_TOKEN } from '@piying/view-angular-core';

@Component({
  selector: 'manual-object',
  templateUrl: './component.html',
  imports: [
    PiyingFieldControlBindDirective,
    PiyingFieldTemplateDirective,
    FormsModule,
  ],
})
export class ManualObjectComponent {
  static __version = 2;
  templateRef = viewChild.required('templateRef');
  field$$ = inject(PI_VIEW_FIELD_TOKEN);
  user$$ = computed(() => {
    return this.field$$().get(['user'])!;
  });
  name$$ = computed(() => {
    return this.field$$().get(['name'])!;
  });
}
