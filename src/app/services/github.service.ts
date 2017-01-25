import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  private username: string;
  private client_id = '675c8b1f3b5226440285';
  private client_secret = '9ebfc4848836be6bab72e1b70c3cf50c361af21c';
  private keyword: string;
  private language: string;

  constructor(private _http: Http) {
    console.log('Github Service is Ready');
    this.username = 'aminkamaldev';
  }

  getUser() {
    return this._http.get
      ('http://api.github.com/users/' + this.username + '?client_id' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get
      ('http://api.github.com/users/' + this.username + '/repos?client_id' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUsername(username: string) {
    this.username = username;
  }

  searchRepos() {
    return this._http.get
      ('https://api.github.com/search/repositories?q=' + this.keyword + '+language:' + this.language + '&sort=stars&order=desc')
      .map(res => res.json());
  }
  // TODO 02-ajouter la pagination dans le resultat de la requete avec un odre alphabetique
}
