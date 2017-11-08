import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiResultDetails } from '../../models/apiResultDetails';
import { ApiResult } from '../../models/apiResult';
import { TvShow } from '../../models/tvShow';
import { TvShowDetails } from '../../models/tvShowDetails';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  tvShow: TvShowDetails;
  
  title: string;
  description: string;
  image_path: string;


  constructor(public navCtrl: NavController,public navParams: NavParams, private http: HttpClient) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('title');
    var id = this.navParams.get('tvshowId');
    
  
    this.http.get<ApiResultDetails>('https://www.episodate.com/api/show-details?q=' +id)
    .subscribe(result =>(this.tvShow= result.tvShow))
  
  }
}

