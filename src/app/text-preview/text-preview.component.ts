import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextPreviewComponent{
  renderedHtml = '';

  @Input() set markdownText(value: string) {
    this.renderedHtml = marked(value);
  }
}
