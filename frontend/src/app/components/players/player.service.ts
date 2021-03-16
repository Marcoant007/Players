import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Player } from './player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl= "http://localhost:3333/players"

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string):void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  public async findByIdPlayer(id: any): Promise<Player> {
    return this.http.get<Player>(`${this.baseUrl}/${id}`).toPromise()
  }

  public async get(): Promise<any> {
    return this.http.get<Player[]>(this.baseUrl).toPromise()
  }

  public async savePlayer(player: Player): Promise<Player>{
    return this.http.post<Player>(this.baseUrl, player).toPromise()
  }

  public async deletePlayer(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`).toPromise()
  }

  public async update(id:number, player: Player): Promise<Player>{
    return this.http.put<Player>(`${this.baseUrl}/${id}`, player).toPromise()
  }
  

}
