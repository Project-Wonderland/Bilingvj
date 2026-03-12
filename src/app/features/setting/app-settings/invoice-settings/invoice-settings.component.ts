import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-invoice-settings',
  imports:[CommonModule,NgxEditorModule,MatSelectModule],
  templateUrl: './invoice-settings.component.html',
  styleUrls: [ './invoice-settings.component.scss']
})
export class InvoiceSettingsComponent {
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['link'],
  ];
  
ngOnInit(): void {
  this.editor = new Editor();
}
ngOnDestroy(): void {
  this.editor.destroy();
}
}
