import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public breakpointObserver = inject(BreakpointObserver);

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Lista', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Lista', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(public modalService: NgbModal) { }

  openModal(content: any) {
    const modalOptions: NgbModalOptions = {
      scrollable: true
    };

    this.modalService.open(content, modalOptions);
  }
}
