import { Component, OnInit } from '@angular/core';
import {
  patchInputs,
  patchWrappers,
  setComponent,
} from '@piying/view-angular-core';
import * as v from 'valibot';
import { CustomNgBuilder } from '../piying/custom.builder';
import { FieldGlobalConfig } from '../piying/define';
import { PiyingView } from '@piying/view-angular';
@Component({
  selector: 'app-piying',
  templateUrl: './component.html',
  imports: [PiyingView],
})
export class PiyingPage {
  schema = v.pipe(
    v.object({
      text1: v.pipe(v.optional(v.string()), v.title('text1-label')),
      number1: v.pipe(
        v.number(),
        v.title('number1'),
        patchWrappers(['label', 'validator'])
      ),
      radio1: v.pipe(
        v.optional(v.picklist(['v1', 'v2'])),
        setComponent('radio'),
        patchInputs({
          options: [
            { label: 'label-v1', value: 'v1' },
            { label: 'label-v2', value: 'v2' },
          ],
        }),
        v.title('radio1-title')
      ),
      checkbox1: v.optional(v.boolean()),
    }),
    v.title('form'),
    setComponent('fieldset')
  );
  options = {
    fieldGlobalConfig: FieldGlobalConfig,
    builder: CustomNgBuilder,
  };
  modelChagned(event: any) {
    console.log(event);
  }
}
