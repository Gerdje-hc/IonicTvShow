import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TvShow } from "../../models/tvShow";
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../../models/apiResult';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tvShows: TvShow [];

  constructor(private http: HttpClient) {
    this.http.get<ApiResult>('https://www.episodate.com/api/most-popular?page=1')
    .subscribe(result =>this.tvShows = result.tv_shows);  // we subscriben voor de result van de observer terug te krijgen (we halen hier enkel de tvShows op en niet de pages)

  }




  searchClicked(){
    alert("You have clicked search!!!")
  }

}
