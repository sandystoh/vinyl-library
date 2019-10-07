import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vinyl } from '../model';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from './add-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  vinyl: Vinyl;

  @Output()
  deleteVinyl = new EventEmitter<string>();

  @Output()
  editVinyl = new EventEmitter<Vinyl>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  colorFormat(c) {
      return c > 6 ? {'background-color': '#3bc22f'} :
      c > 3 ? {'background-color': '#ffbf00'} :
      c > 1 ? {'background-color': '#cf3e60'} : {'background-color': 'gray'};
  }

  Delete(id) {
    this.deleteVinyl.emit(this.vinyl.id);
  }

  openDialog(): void {
     const dialogRef = this.dialog.open(AddItemComponent, {
      width: '500px',
      data: {vinyl: this.vinyl, title: 'Edit Album'}
    });

     dialogRef.afterClosed().subscribe(result => {
    // console.log('The dialog was closed', result.vinyl);
    if (result !== undefined) {this.editVinyl.emit(result.vinyl); }
    });
  }
}
