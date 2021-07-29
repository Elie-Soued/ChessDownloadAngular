import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../Services/Transfer/transfer.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  user?: any;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  setUser(value: any) {
    this.user = value;
  }

  getInfo() {
    this.transferService.receiveInfo().subscribe((d) => this.setUser(d));
  }
}
