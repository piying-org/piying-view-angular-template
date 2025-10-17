import { NgTemplateOutlet } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { PiyingViewGroupBase } from '@piying/view-angular';

@Component({
  selector: 'fieldset-group',
  templateUrl: './component.html',
  imports: [NgTemplateOutlet],
})
export class FieldsetFGC extends PiyingViewGroupBase {
  static __version = 2;
  templateRef = viewChild.required('templateRef');
}
