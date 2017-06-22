import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [BrowserModule
    , BrowserAnimationsModule, FormsModule
    , InputTextModule, ButtonModule
    , SidebarModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
