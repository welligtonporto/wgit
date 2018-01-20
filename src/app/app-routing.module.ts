import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRepositoriesComponent } from './my-repositories/my-repositories.component';
import { SearchRepositoriesComponent } from './search-repositories/search-repositories.component';

const routes: Routes = [
	{ path: '', redirectTo: '/my-repositories', pathMatch: 'full' },
	{ path: 'my-repositories', component: MyRepositoriesComponent },
	{ path: 'search-repositories', component: SearchRepositoriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
