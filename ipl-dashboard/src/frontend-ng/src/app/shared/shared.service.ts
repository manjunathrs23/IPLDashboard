import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Match } from "./model/match";
import { IplResponse } from "./model/ipl-response";


@Injectable({
    providedIn: 'root',
  })
export class SharedService {

    private matches: Match[];
    private teams : string[];
    private teamName = 'Rajasthan Royals';
    private inputUrl = `http://localhost:1999/team/`;
    private teamUrl = 'http://localhost:1999/teams';
    

    constructor(private http: HttpClient) { }

    getMatchDetails(teamname : string) : Observable<IplResponse> {
             
        this.inputUrl = 'http://localhost:1999/team/' + teamname;
        return this.http.get<IplResponse>(this.inputUrl)
          .pipe(
            //tap(data => console.log(data.matches)),
            tap(data => this.matches = data.matches)
            //catchError(this.handleError)
          );
      }

      getTeamNames() : Observable<string[]> {
        return this.http.get<string[]>(this.teamUrl)
          .pipe(
            //tap(data => console.log(data.matches)),
            tap(data => this.teams = data)
            //catchError(this.handleError)
          );

      }
}