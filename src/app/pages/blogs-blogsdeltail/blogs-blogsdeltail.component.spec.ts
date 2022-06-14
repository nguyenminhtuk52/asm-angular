import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsBlogsdeltailComponent } from './blogs-blogsdeltail.component';

describe('BlogsBlogsdeltailComponent', () => {
  let component: BlogsBlogsdeltailComponent;
  let fixture: ComponentFixture<BlogsBlogsdeltailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsBlogsdeltailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsBlogsdeltailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
