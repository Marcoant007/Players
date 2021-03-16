import { HttpClient } from "@angular/common/http";
import { Position } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Positions } from "./position.model";



@Injectable({
    providedIn: 'root'
})


export class PositionService {

    baseUrl = "http://localhost:3333/positions"

    constructor(
        private http: HttpClient,
        private router : Router
    ){

    }

    public async findByIdPosition(id:any): Promise<Positions>{
        return this.http.get<Positions>(`${this.baseUrl}/${id}`).toPromise()
    }

    public async listPosition(): Promise<any>{
        return this.http.get<Positions[]>(this.baseUrl).toPromise()
    }

    public async savePosition(positions: Positions): Promise<Positions>{
        return this.http.post<Positions>(this.baseUrl, positions).toPromise()
    }

    public async deletePosition(id: number){
        return this.http.delete(`${this.baseUrl}/${id}`).toPromise()
    }

    public async updatePosition(id: number, positions: Positions): Promise<Positions>{
        return this.http.put<Positions>(`${this.baseUrl}/${id}`, positions).toPromise()
    }


}