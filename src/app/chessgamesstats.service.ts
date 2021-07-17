import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChessgamesstatsService {
  public username: string = 'eliegebransoued';
  data: any;
  readonly ROOT_URL = `https://api.chess.com/pub/player/${this.username}/stats`;
  constructor(private http: HttpClient) {}

  getData(): Observable {
    return (this.data = this.http.get(this.ROOT_URL));
  }
}
