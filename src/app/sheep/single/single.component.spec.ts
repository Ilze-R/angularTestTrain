import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SheepService } from 'src/app/services/sheep.service';
import { Sheep } from 'src/app/types';

import { SingleComponent } from './single.component';

describe('SingleComponent', () => {
  let component: SingleComponent;
  let fixture: ComponentFixture<SingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleComponent],
      providers: [
        {
          provide: SheepService,
          useValue: {
            findSheep: (name: string): Observable<Sheep> =>
              of({
                name: 'SheepName',
                title: 'Sheep title',
                tagline: 'Sheep tag',
              }),
          },
        },
        {
          // this.route.snapshot.parammMap.get('name)
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              get: (name: string) => 'SheepName',
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
