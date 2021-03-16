import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatSidenavModule} from '@angular/material/sidenav';
import {  MatListModule } from '@angular/material/list';
import {  MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import  {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { HomeComponent } from './views/home/home.component';
import { PlayersCrudComponent } from './views/players-crud/players-crud.component';
import { PlayerCreateComponent } from './components/players/player-create/player-create.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PlayerReadComponent } from './components/players/player-read/player-read.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TeamCreateComponent } from './components/teams/team-create/team-create.component';
import { TeamReadComponent } from './components/teams/team-read/team-read.component';
import { TeamCrudComponent } from './views/team-crud/team-crud.component';
import { PositionCrudComponent } from './views/position-crud/position-crud.component';
import { PositionsCreateComponent } from './components/positions/positions-create/positions-create.component';
import { PositionsReadComponent } from './components/positions/positions-read/positions-read.component';
import { PlayerCreateModule } from './components/players/player-create/player-create.module';
import { FormDebugComponent } from './components/players/form-debug/form-debug.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PlayersCrudComponent,
    PlayerCreateComponent,
    PlayerReadComponent,
    TeamCreateComponent,
    TeamReadComponent,
    TeamCrudComponent,
    PositionCrudComponent,
    PositionsCreateComponent,
    PositionsReadComponent,
    FormDebugComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    PlayerCreateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
