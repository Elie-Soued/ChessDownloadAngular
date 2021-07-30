import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../Services/Transfer/transfer.service';
import { chessPlayer } from 'src/app/Interfaces/chessPlayer';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
})
export class ResultPageComponent implements OnInit {
  user = {} as chessPlayer;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  setUser(value: chessPlayer) {
    this.user = value;
  }

  getInfo() {
    this.transferService.receiveInfo().subscribe((d) => this.setUser(d));
  }
}
