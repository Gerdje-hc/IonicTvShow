import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TvShow } from '../../models/tvShow';
import { ApiResult } from '../../models/apiResult';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  
})
export class SearchPage {
  tvShow: TvShow[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
 
  search(event: any){
    console.log(event.target.value);

    this.http.get<ApiResult>('https://www.episodate.com/api/search?q=arrow&page=1')
    .subscribe(result =>this.tvShow = result.tv_shows); 
  }

  gotoDetails(show: TvShow) {
  this.navCtrl.push ('DetailsPage', {
    tvshowId: show.id,
    title: show.name,
  });
  }
    
  }
 


  


 
