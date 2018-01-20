import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { RepositoryService } from '../repository.service';

@Component({
    selector: 'app-my-repositories',
    templateUrl: './my-repositories.component.html',
    styleUrls: ['./my-repositories.component.css']
})
export class MyRepositoriesComponent implements OnInit {
    myUser: string = 'welligtonporto';
    repositories: any[] = [];

    constructor(private repositoryService: RepositoryService) { }

    ngOnInit() {
        this.getUserRepositories(this.myUser);
    }

    getUserRepositories(user) {
        this.repositoryService.getUserRepositories(user)
            .subscribe(response => {
                response.map(repository => {
                    this.repositories.push({
                        'name': repository.name,
                        'url': repository.html_url,
                        'language': repository.language,
                        'forks': repository.forks,
                        'stars': repository.stargazers_count
                    });
                });
        });
    }

}
