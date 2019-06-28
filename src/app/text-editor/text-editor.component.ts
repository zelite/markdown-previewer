import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit, OnChanges {

  @Input()
  markdownText = 'hello';

  @Output()
  changedText = new EventEmitter<string>();

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor() {
  }

  ngOnInit() {

  }

  handleNewInput(newText: string) {
    this.changedText.emit(newText);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // When clearing form, the text area does not automatically autoresize.
    // Therefore we force the resize here.
    if (changes.markdownText) {
      if (changes.markdownText.isFirstChange() === false && changes.markdownText.currentValue.length === 0) {
        setTimeout(() => {
          this.autosize.resizeToFitContent(true);
        }, 0);
      }
    }
  }
}
