import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  getRandomWord(length: number): Observable<string[]>{
    let queryParams = new HttpParams().append("length", length);

    return this.http.get<string[]>(environment.randomWordApiUrl, {params: queryParams});
  }

  searchForWord(word: string) {
    let url = `${environment.dictionaryApi}/${word}`;

    return this.http.get(url);
  }
}
