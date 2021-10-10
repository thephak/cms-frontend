import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AppService {
  backend_url = environment.backend_url;
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    })
  };

  
  constructor(private http: HttpClient) { }

  getContents(): Observable<JSON> {
    return this.http.get<JSON>(this.backend_url+"/api/contents/", this.httpOptions)
      .pipe(
        catchError(this.handleError<JSON>('getContents', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}

