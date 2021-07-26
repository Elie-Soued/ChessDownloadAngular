import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  archives = {};

  constructor(
    private dataService: DataService,
    private transferService: TransferService
  ) {}

  playerStats?: {};

  ngOnInit(): void {
    this.transferService.receiveInfo().subscribe((d) => this.setArchives(d));
  }

  setArchives(value: any) {
    this.archives = value;
    // console.log(this.archives);
  }
}
