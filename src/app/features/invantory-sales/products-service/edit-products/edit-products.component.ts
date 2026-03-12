import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { routes } from '../../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CustomPaginationComponent } from '../../../../shared/custom-pagination/custom-pagination.component';

@Component({
    selector: 'app-edit-products',
    templateUrl: './edit-products.component.html',
    styleUrls: ['./edit-products.component.scss'],
    imports:[CommonModule,NgxEditorModule,MatSelectModule,RouterLink]
})
export class EditProductsComponent {
  public routes = routes;
  files: File[] = [];
  Units='select units'
  Discount='select discount'
  Tax='select tax'

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    sanitize: false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  onSelect(event: { addedFiles: File[] }) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event:File) {
   this.files.splice(this.files.indexOf(event), 1);
  }
  trash:boolean[]=[true]
  remove(index:number):void{
    this.trash[index]=!this.trash[index];
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
 

  ngOnInit(): void {
    this.editor = new Editor();
  }

}
