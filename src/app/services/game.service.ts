import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }
  // channge this according to your backend api url
  BACKEND_API_URL = "http://localhost:8080/api/bgg/games-ng"

  getGames(limit: number, offset: number){
    const params = new HttpParams()
      .set("limit", limit)
      .set("offset", offset);

    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient
      .get<Game[]>(this.BACKEND_API_URL, { params: params, headers: headers});
  }


}
