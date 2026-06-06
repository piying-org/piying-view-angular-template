import { Component, inject, Injector, OnInit } from '@angular/core';
import { NFCSchema, actions, setComponent } from '@piying/view-angular-core';
import * as v from 'valibot';
import { CustomNgBuilder } from '../piying/custom.builder';
import { FieldGlobalConfig } from '../piying/define';
import {
  PiyingFieldControlBindDirective,
  PiyingView,
  convertToField,
} from '@piying/view-angular';
import { ManualObjectComponent } from '../piying/manual-object/component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-piying-manual',
  templateUrl: './component.html',
  imports: [PiyingFieldControlBindDirective, FormsModule],
})
export class PiyingManualPage {
  field = convertToField(
    () =>
      v.object({
        text1: v.pipe(v.optional(v.string()), v.title('text1-label')),
        number1: v.pipe(
          v.number(),
          v.title('number1'),
          // actions.wrappers.set(['label', 'validator']),
        ),
        radio1: v.pipe(
          v.optional(v.picklist(['v1', 'v2'])),
          setComponent('radio'),
          // actions.inputs.patch({
          //   options: [
          //     { label: 'label-v1', value: 'v1' },
          //     { label: 'label-v2', value: 'v2' },
          //   ],
          // }),
          v.title('radio1-title'),
        ),
        checkbox1: v.optional(v.boolean()),
      }),
    inject(Injector),
  );

  modelChagned(event: any) {
    console.log(event);
  }
}
