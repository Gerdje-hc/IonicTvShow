import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';  // hier gaan we de storage terug importeren
import { TvShow } from '../../models/tvShow';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  favourites : TvShow[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewWillEnter() {
    this.favourites = [];
    this.storage.forEach((val,key) => {
      this.favourites.push(val)
    })
  }

  gotoDetails(show: TvShow) {
    this.navCtrl.push ('DetailsPage', {
      tvshowId: show.id,
      title: show.name,
    });

}
}
