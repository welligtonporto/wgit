import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyRepositoriesComponent } from './my-repositories/my-repositories.component';
import { SearchRepositoriesComponent } from './search-repositories/search-repositories.component';

import { RepositoryService } from './repository.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent,
        MyRepositoriesComponent,
        SearchRepositoriesComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule, 
        FormsModule,
        AppRoutingModule
    ],
    providers: [ RepositoryService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
