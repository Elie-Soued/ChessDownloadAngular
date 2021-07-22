import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlPlayer: string = 'https://api.chess.com/pub/player/';
  player?: string;
  constructor(private http: HttpClient) {}

  doesPlayerExist(player: string): Observable<any> {
    return this.http.get(this.urlPlayer + player);
  }

  getArchive(player: string): Observable<any> {
    return this.http.get(`https://api.chess.com/pub/player/${player}/stats`);
  }

  // handleError(error: HttpErrorResponse) {
  //   return throwError(error.message || 'server error');
  // }

  // private handleError<T>(result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };
  // }
}
