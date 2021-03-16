import { NumberFormatStyle } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Team } from "./team.model";


@Injectable({
    providedIn: 'root'
})

export class TeamService {
    
    baseUrl = "http://localhost:3333/teams"


    constructor(
        private http: HttpClient,
        private router : Router
     ) {
        
    }

    public async findById(id:any): Promise<Team>{
        return this.http.get<Team>(`${this.baseUrl}/${id}`).toPromise()
    }

      public async get(): Promise<any>{
          return this.http.get<Team[]>(this.baseUrl).toPromise()
      }

      public async save(team: Team): Promise<Team>{
          return this.http.post<Team>(this.baseUrl, team).toPromise()
      }

      public async delete(id: number) {
          return this.http.delete(`${this.baseUrl}/${id}`).toPromise()
     }

     public async update(id: number, team: Team ): Promise<Team>{
         return this.http.put<Team>(`${this.baseUrl}/${id}`, team).toPromise()
     }

}