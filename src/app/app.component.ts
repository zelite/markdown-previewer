import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  markdownText = `Heading
=======

## Sub-heading

Paragraphs are separated
by a blank line.

Two spaces at the end of a line  
produces a line break.

Text attributes _italic_, 
**bold**, \`monospace\`.

Horizontal rule:

---

Bullet list:

  * apples
  * oranges
  * pears

Numbered list:

  1. wash
  2. rinse
  3. repeat

An [example](http://example.com)

![Image](Icon-pictures.png "icon")

> Markdown uses email-style > characters for blockquoting.

Inline <abbr title="Hypertext Markup Language">HTML</abbr> is supported.`;

  ngOnInit(): void {

  }

  handleTextChange(newText: string) {
    this.markdownText = newText;
  }

  handleDeleteClick() {
    this.markdownText = '';
  }
}
