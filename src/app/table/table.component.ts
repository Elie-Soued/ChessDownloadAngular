import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { archives } from '../archives';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  archives?: archives;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.getArchives();
  }

  setArchives(value: any) {
    this.archives = value;
    // console.log(this.archives?.chess_daily.last.rating);
  }

  getArchives() {
    this.transferService
      .receiveArchives()
      .subscribe((d) => this.setArchives(d));
  }
}
