import {Component, Input, OnInit} from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-text-preview',
  templateUrl: './text-preview.component.html',
  styleUrls: ['./text-preview.component.scss']
})
export class TextPreviewComponent implements OnInit {
  renderedHtml = '';

  @Input() set markdownText(value: string) {
    this.renderedHtml = marked(value);
  }



  constructor() {
  }

  ngOnInit() {
    marked.setOptions({sanitize: true});
  }

}
