import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { chessPlayer } from './chessPlayer';
import { HttpErrorResponse } from '@angular/common/http';
import { archives } from './archives';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlPlayer: string = 'https://api.chess.com/pub/player/';
  player?: string;
  constructor(private http: HttpClient) {}

  getPlayer(player: string) {
    return this.http
      .get<chessPlayer>(this.urlPlayer + player)
      .pipe(catchError(this.handleError));
  }

  getArchive(player: string) {
    return this.http
      .get<archives>(`https://api.chess.com/pub/player/${player}/stats`)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
