import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule } from  'ngx-ui-loader';
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    timeOut: 2000,
    positionClass: "toast-top-right",
    preventDuplicates: true,
    maxOpened: 1
    }),
    NgxUiLoaderModule,
    HttpModule,
    NgxUiLoaderRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
