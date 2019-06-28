import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {TextEditorComponent} from './text-editor/text-editor.component';
import {TextPreviewComponent} from './text-preview/text-preview.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TextEditorComponent,
        TextPreviewComponent,
      ],
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        FlexModule,
        MatFormFieldModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
