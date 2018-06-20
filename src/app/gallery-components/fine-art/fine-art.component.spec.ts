import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineArtComponent } from './fine-art.component';

describe('FineArtComponent', () => {
  let component: FineArtComponent;
  let fixture: ComponentFixture<FineArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
