import { Component, OnInit } from '@angular/core';
import {GithubService} from "../services/github.service";


@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {
  repos: any[];

  constructor(private _githubService: GithubService) {

  }

  searchRepos(){
    this._githubService.searchRepos().subscribe(repos => {this.repos = repos; });
  }
  ngOnInit() {
  }

}
