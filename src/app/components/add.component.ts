import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vinyl, Constants } from '../model';
import { AddItemComponent } from './add-item.component';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  vinyl: Vinyl;

  @Output()
  addVinylToList = new EventEmitter<Vinyl>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addVinyl(): void {

    this.vinyl = {
      id: uuid.v4(),
      title: '',
      artist: '',
      rating: 0,
      imageSrc: Constants.DEFAULT_IMAGE
    };

    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '500px',
      data: {vinyl: this.vinyl, title: 'Add Album'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result !== undefined) {this.addVinylToList.emit(result.vinyl); }
    });

  }

}
