import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';
import 'rxjs/Rx';

import { RepositoryService } from '../repository.service';

@Component({
	selector: 'app-search-repositories',
	templateUrl: './search-repositories.component.html',
	styleUrls: ['./search-repositories.component.css']
})
export class SearchRepositoriesComponent implements OnInit {
    searchTerm = new FormControl();
    repositories: any[] = [];
    cont:number = 0;
    page:number = 1;

    constructor(private repositoryService: RepositoryService) { }

    ngOnInit() {
        this.searchTerm.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(term => {
                if (term){
                    this.repositories = [];
                    this.page = 1;
                    this.getSearch(term, this.page);
                } else {
                    this.repositories = [];
                }
            });
    }

	getSearch(term: string, page: number){
		this.repositoryService.getSearch(term, page)
            .subscribe(response => {
                response.items.map(repository => {
                    this.repositories.push({
                        'owner': repository.owner.login,
                        'name': repository.name,
                        'url': repository.html_url,
                        'language': repository.language,
                        'forks': repository.forks,
                        'stars': repository.stargazers_count
                    });
                });
            }
        );

        this.page++;
	}

    getPage(term: string, page: number){
        this.getSearch(term, page);
    }

}
