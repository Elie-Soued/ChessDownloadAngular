import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private userInfo = new BehaviorSubject('');
  private userArchives = new BehaviorSubject('');
  constructor() {}

  sendInfo(info: any) {
    this.userInfo.next(info);
  }

  receiveInfo() {
    return this.userInfo.asObservable();
  }

  sendArchives(info: any) {
    this.userArchives.next(info);
  }

  receiveArchives() {
    return this.userArchives.asObservable();
  }
}
