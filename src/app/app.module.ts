import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';


/****** Sevice *****/
import { AppService } from './services/app.service';
import { ConfigFactory, ConfigService, API_BASE_URL } from './services/config';



import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ViewSubmittedTransactionsComponent } from './view-submitted-transactions/view-submitted-transactions.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-transaction', component: NewTransactionComponent },
  { path: 'view-submitted-transactions', component: ViewSubmittedTransactionsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NewTransactionComponent,
    ViewSubmittedTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConfigService, AppService,
    { provide: 'CONFIGPATH', useValue: './assets/config.json' },
    { provide: 'APIURL-VAR', useValue: 'API_BASE_URL' },
    {
      provide: API_BASE_URL, useFactory: ConfigFactory,
      deps: [ConfigService, 'CONFIGPATH', 'APIURL-VAR']
    },
    // { provide: DateAdapter, useClass: AppDateAdapter },
    // { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
  

})
export class AppModule { }
