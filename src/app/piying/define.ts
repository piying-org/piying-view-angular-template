import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  NumberValueAccessor,
  RangeValueAccessor,
} from '@angular/forms';
import { actions, PiViewConfig } from '@piying/view-angular';

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
      actions: [
        actions.attributes.set({
          class: 'input',
        }),
        actions.wrappers.set(['label']),
      ],
    },
    number: {
      type: InputNumberFCC,
      actions: [
        actions.attributes.set({
          class: 'input',
        }),
      ],
    },
    radio: {
      type: () => import('./radio/component').then((a) => a.default),
    },
    boolean: {
      type: InputCheckboxFCC,
      actions: [
        actions.attributes.set({
          class: 'checkbox',
        }),
      ],
    },
    checkbox: {
      type: CheckboxComponent,
      actions: [
        actions.props.set({
          hideTitle: true,
        }),
      ],
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
