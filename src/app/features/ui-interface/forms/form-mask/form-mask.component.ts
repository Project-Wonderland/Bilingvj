import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
    selector: 'app-form-mask',
    templateUrl: './form-mask.component.html',
    styleUrls: ['./form-mask.component.scss'],
    imports: [CommonModule,NgxMaskDirective,FormsModule,ReactiveFormsModule]
})
export class FormMaskComponent implements OnInit {
  public basicForm!: UntypedFormGroup;
  customPatterns = {
    V: { pattern: new RegExp("-?") },
    "0": { pattern: new RegExp("[0-9]") },
  };
  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.basicForm = this.formBuilder.group({
      txt: [""],
    });
  }

}
