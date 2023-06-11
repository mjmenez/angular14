import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDoModule } from './to-do/to-do.module';
import { ToastrModule } from 'ngx-toastr';
import { DirectivesModule } from './directives/directives.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToDoModule,
    HomeModule,
    ToastrModule.forRoot(),
    DirectivesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
