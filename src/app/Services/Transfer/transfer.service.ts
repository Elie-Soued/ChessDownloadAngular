import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { archives } from 'src/app/Interfaces/archives';
import { chessPlayer } from 'src/app/Interfaces/chessPlayer';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private userInfo = new BehaviorSubject<chessPlayer>({} as chessPlayer);
  private userArchives = new BehaviorSubject<archives>({} as archives);
  constructor() {}

  sendInfo(info: chessPlayer) {
    this.userInfo.next(info);
  }

  receiveInfo() {
    return this.userInfo.asObservable();
  }

  sendArchives(info: archives) {
    this.userArchives.next(info);
  }

  receiveArchives() {
    return this.userArchives.asObservable();
  }
}
