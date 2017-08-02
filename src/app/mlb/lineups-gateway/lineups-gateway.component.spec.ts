import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingLineupsComponent } from './lineups-gateway.component';

describe('StartingLineupsComponent', () => {
  let component: StartingLineupsComponent;
  let fixture: ComponentFixture<StartingLineupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingLineupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingLineupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
