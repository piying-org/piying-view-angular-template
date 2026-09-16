import { Component, inject, Injector, OnInit } from '@angular/core';
import { setComponent, typedFieldPipe } from '@piying/view-angular-core';
import * as v from 'valibot';
import {
  PiyingFieldControlBindDirective,
  PiyingFieldTemplateDirective,
  PiyingView,
  convertToField,
  typedFieldComponentPipe,
} from '@piying/view-angular';
import { FormsModule } from '@angular/forms';
const FieldGlobalConfig = {
  types: {
    radio: {
      type: () => import('../piying/radio/component').then((a) => a.default),
    },
  },
};
const Schema = v.object({
  text1: v.pipe(v.optional(v.string()), v.title('text1-label')),
  number1: v.pipe(v.number(), v.title('number1')),
  radio1: v.pipe(
    v.optional(v.picklist(['v1', 'v2'])),
    setComponent('radio'),
    v.title('radio1-title'),
  ),
  checkbox1: v.optional(v.boolean()),
});

const TypedSchema = typedFieldComponentPipe(Schema, FieldGlobalConfig, (d) => {
  return [
    d(['radio1'], 'radio', [
      d.inputs.patch({
        options: [
          { label: 'label-v1', value: 'v1' },
          { label: 'label-v2', value: 'v2' },
        ],
      }),
      // d.outputChange((fn) => {
      //   fn([{ list: [], output: 'indexChange' }]).subscribe(
      //     ({ list, listenFields }) => {
      //       let outputValue = list[0]![0];
      //       let xxx = listenFields[0];
      //       xxx.form.control?.value;
      //     },
      //   );
      // }),
    ]),
  ];
});
const TypedSchema2 = typedFieldPipe(TypedSchema, (d) => {
  return [
    d(
      ['text1'],
      [
        d.outputChange((fn) => {
          fn([{ list: ['..', 'radio1'], output: 'indexChange' }]).subscribe(
            (change) => {
              change.field.form.control!.updateValue(
                `set ${change.list[0]![0]}`,
              );
            },
          );
        }),
      ],
    ),
  ];
});
@Component({
  selector: 'app-piying-manual',
  templateUrl: './component.html',
  imports: [
    PiyingFieldControlBindDirective,
    FormsModule,
    PiyingFieldTemplateDirective,
  ],
})
export class PiyingManualPage {
  field = convertToField(
    () => TypedSchema2,
    undefined,
    () => {
      return {
        fieldGlobalConfig: {
          types: {
            radio: {
              type: () =>
                import('../piying/radio/component').then((a) => a.default),
            },
          },
        },
      };
    },
  );

  modelChagned(event: any) {
    console.log(event);
  }
}
