import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { EntryComponent } from './entry.component';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  let routerMock = { navigate: (path: string[]): void => {} };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleNavigation()', () => {
    beforeEach(() => {
      spyOn(component, 'handleNavigation');
      spyOn(routerMock, 'navigate');
    });
    it('should handle navigation with param false', () => {
      // component.handleNavigation(false);
      const nativeObject = fixture.debugElement.nativeElement;
      nativeObject.querySelector('#p3').click();
      expect(component.handleNavigation).toHaveBeenCalled();
      expect(routerMock.navigate).not.toHaveBeenCalled();
    });
    it('should handle navigation with param true', () => {
      // component.handleNavigation(true);
      const nativeObject = fixture.debugElement.nativeElement;
      nativeObject.querySelector('#p2').click();
      expect(component.handleNavigation).toHaveBeenCalled();
      expect(routerMock.navigate).not.toHaveBeenCalled();
    });
  });
});
