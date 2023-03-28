import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SheepService } from '../services/sheep.service';

import { SheepComponent } from './sheep.component';

describe('SheepComponent', () => {
  let component: SheepComponent;
  let fixture: ComponentFixture<SheepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SheepComponent],
      providers: [{ provide: SheepService, useValue: {
        gatherFlock: () => of([])
      } }],
    }).compileComponents();

    fixture = TestBed.createComponent(SheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
