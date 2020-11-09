import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamaisCriarComponent } from './ramais-criar.component';

describe('RamaisCriarComponent', () => {
  let component: RamaisCriarComponent;
  let fixture: ComponentFixture<RamaisCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamaisCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamaisCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
