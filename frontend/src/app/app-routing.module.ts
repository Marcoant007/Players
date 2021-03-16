import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCreateComponent } from './components/players/player-create/player-create.component';
import { PositionsCreateComponent } from './components/positions/positions-create/positions-create.component';
import { PositionsReadComponent } from './components/positions/positions-read/positions-read.component';
import { TeamCreateComponent } from './components/teams/team-create/team-create.component';
import { TeamReadComponent } from './components/teams/team-read/team-read.component';
import { HomeComponent } from './views/home/home.component';
import { PlayersCrudComponent } from './views/players-crud/players-crud.component';
import { PositionCrudComponent } from './views/position-crud/position-crud.component';
import { TeamCrudComponent } from './views/team-crud/team-crud.component';



const routes: Routes = [{
  path: "",
  component: HomeComponent
},

{
  path: "players",
  component: PlayersCrudComponent
},
{
  path: "player",
  component: PlayerCreateComponent
},
{
  path: "teams",
  component: TeamCrudComponent
},
{
  path: "team",
  component: TeamCreateComponent
},
{
  path: "teams/:id",
  component: TeamCreateComponent
},
{
  path: "position",
  component: PositionsCreateComponent
},
{
  path: "position/:id",
  component: PositionsCreateComponent
},
{
  path: "positions",
  component: PositionCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
