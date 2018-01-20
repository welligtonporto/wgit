import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RepositoryService {

	constructor(private http: Http) { }

	getUserRepositories(user: string){
		return this.http.get(`https://api.github.com/users/${user}/repos`)
			.map(response => response.json());
	}

	getSearch(term: string, page: number){
		return this.http.get(`https://api.github.com/search/repositories?q=${term}+in:name&page=${page}&per_page=20`)
			.map(response => response.json());
	}

}
