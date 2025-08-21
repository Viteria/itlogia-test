import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgViewer } from './img-viewer';

describe('ImgViewer', () => {
  let component: ImgViewer;
  let fixture: ComponentFixture<ImgViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
