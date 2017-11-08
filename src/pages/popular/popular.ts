import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from '../../models/apiResult';
import { TvShow } from '../../models/tvShow';
import {Storage} from '@ionic/storage';
import { Badge } from '@ionic-native/badge';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  tvShows: TvShow[] = [];

  constructor(public navCtrl: NavController, private http: HttpClient, private storage : Storage, private alertCtrl: AlertController, private badge: Badge ) {  // opgelet! als we de Storage importeren opletten met de standaart import, beter manueel)
  }

  ionViewDidLoad() {
    this.http.get<ApiResult>('https://www.episodate.com/api/most-popular?page=1')
    .subscribe(result =>this.tvShows = result.tv_shows); 
  }

  gotoDetails(show: TvShow) {
  this.navCtrl.push ('DetailsPage', {
    tvshowId: show.id,
    title: show.name,
  });
  }

  addToFav(show: TvShow) {
    this.storage.set(show.id.toString(), show).then(() => {
      this.badge.increase(1);  // dit voegt een favorite item toe aan je ster
      let alert = this.alertCtrl.create( {
        title: 'Successfully added to favourites',
      });  
      // hier gaan we in de method een de show.id meegeven in een toString() en de show

      alert.present();

      setTimeout (() => {
        alert.dismiss();
      }, 1000);
    });

    }
  }
    
   // de storage geeft een promise terug
