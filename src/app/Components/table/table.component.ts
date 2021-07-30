import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../Services/Transfer/transfer.service';
import { archives } from '../../Interfaces/archives';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  archives = {} as archives;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.getArchives();
  }

  setArchives(value: archives) {
    this.archives = value;
  }

  getArchives() {
    this.transferService
      .receiveArchives()
      .subscribe((d) => this.setArchives(d));
  }
}
