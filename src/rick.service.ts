import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickService {
  private apiUrl = 'https://rickandmortyapi.com/api';


  constructor(private http: HttpClient) { }

  getRandomCharacter(): Observable<any> {
    const randomId = Math.floor(Math.random() * 826) + 1;
    return this.http.get(`${this.apiUrl}/character/${randomId}`);
  }

  // getCharacterById(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/character/${id}`);
  // }

}
