import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { SimpleTablesService } from './services/simple-tables.service';
import { RequestService } from './services/request.service';
import { UserinfoService } from './services/userinfo.service';
import { HttpClientModule } from '@angular/common/http'; 

import { SimpleTablesComponent } from './simple-tables/simple-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { FullWidthTableComponent } from './full-width-table/full-width-table.component';
import { ResponsibleHoverTableComponent } from './responsible-hover-table/responsible-hover-table.component';

import { CustomMatExpansionToggleDirective} from "./custom.directive"

@NgModule({
  declarations: [
    AppComponent,
    SimpleTablesComponent,
    DataTablesComponent,
    FullWidthTableComponent,
    ResponsibleHoverTableComponent,
    CustomMatExpansionToggleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    NgbModule,

    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SimpleTablesService, RequestService, UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
