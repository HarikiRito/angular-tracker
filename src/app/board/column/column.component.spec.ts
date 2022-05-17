import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardColumnComponent } from './column.component';
import { MatButton } from '@angular/material/button';

describe('ColumnComponent', () => {
  let component: BoardColumnComponent | null;
  let fixture: ComponentFixture<BoardColumnComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardColumnComponent, MatButton],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardColumnComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should render correct title', () => {
    const comp = fixture.componentInstance;
    comp.title = 'Test';
    fixture.detectChanges();
    const title = nativeElement.querySelector('.title');
    expect(title?.textContent).toEqual('Test');
  });
});
