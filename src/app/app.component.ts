import { Component } from '@angular/core';
import { Vinyl, Constants } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vinyl Library';

  vinylList: Vinyl[] = [{
    id: 'string1',
    title: 'A Rush of Blood to the Head',
    artist: 'Coldplay',
    rating: 10,
    image: 'blank-image.gif',
    imageSrc: Constants.IMAGE1 }, {
    id: 'string2',
    title: 'A Night at the Opera',
    artist: 'Queen',
    rating: 10,
    image: 'blank-image.gif',
    imageSrc: Constants.IMAGE2
  } ];

  addVinyl(vinyl) {
    this.vinylList.push(vinyl);
  }

  deleteVinyl(id) {
    this.vinylList.splice(this.vinylList.findIndex(item => item.id === id), 1);
  }

  editVinyl(v: Vinyl) {
    console.log('emit', v);
    const index = this.vinylList.findIndex(x => x.id === v.id);
    if (index) { this.vinylList[index] = v; }
  }
}
