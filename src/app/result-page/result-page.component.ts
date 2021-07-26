import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  user?: any;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    // this.transferService.receiveInfo().subscribe((d) => this.setUser(d));
    // console.log(this.user);
    this.getInfo();
  }

  setUser(value: any) {
    this.user = value;
    // console.log(this.user);
  }

  getInfo() {
    this.transferService.receiveInfo().subscribe((d) => this.setUser(d));
  }
}
