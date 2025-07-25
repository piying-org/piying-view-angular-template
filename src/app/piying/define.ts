import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  NumberValueAccessor,
  RangeValueAccessor,
} from '@angular/forms';
import { PiViewConfig } from '@piying/view-angular';

import { ValidWC } from './wrapper/valid/component';
import { CheckboxComponent } from './checkbox/component';
import { LabelWC } from './wrapper/label/component';
import { FieldsetFGC } from './group/fieldset/component';
export const FieldGlobalConfig = {
  types: {
    string: {
      type: 'input',
      attributes: {
        class: 'input',
      },
      directives: [{ type: DefaultValueAccessor, selector: 'formControl' }],
      wrappers: ['label'],
    },
    number: {
      type: 'input',
      attributes: {
        type: 'number',
        class: 'input',
      },
      directives: [{ type: NumberValueAccessor, selector: 'formControl' }],
    },
    radio: {
      type: () => import('./radio/component').then((a) => a.default),
    },
    boolean: {
      type: 'input',
      attributes: {
        type: 'checkbox',
        class: 'checkbox',
      },
      directives: [
        { type: CheckboxControlValueAccessor, selector: 'formControl' },
      ],
    },
    checkbox: {
      type: CheckboxComponent,
      props: {
        hideTitle: true,
      },
    },
    fieldset: {
      type: FieldsetFGC,
    },
  },
  wrappers: {
    validator: {
      type: ValidWC,
    },
    label: {
      type: LabelWC,
    },
  },
} as PiViewConfig;
