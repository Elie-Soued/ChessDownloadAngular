import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private subject = new BehaviorSubject('');
  constructor() {}

  sendInfo(info: any) {
    this.subject.next(info);
  }

  receiveInfo() {
    return this.subject.asObservable();
  }
}
