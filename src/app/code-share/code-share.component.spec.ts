import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeShareComponent } from './code-share.component';

describe('CodeShareComponent', () => {
  let component: CodeShareComponent;
  let fixture: ComponentFixture<CodeShareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeShareComponent]
    });
    fixture = TestBed.createComponent(CodeShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
