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
import { InputFCC } from './input';
import { InputNumberFCC } from './input-number';
import { InputCheckboxFCC } from './input-checkbox';
export const FieldGlobalConfig = {
  types: {
    string: {
      type: InputFCC,
      attributes: {
        class: 'input',
      },
      wrappers: ['label'],
    },
    number: {
      type: InputNumberFCC,
      attributes: {
        class: 'input',
      },
    },
    radio: {
      type: () => import('./radio/component').then((a) => a.default),
    },
    boolean: {
      type: InputCheckboxFCC,
      attributes: {
        class: 'checkbox',
      },
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
    formHelper: {
      type: () => import('./form-helper/component').then((a) => a.default),
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
