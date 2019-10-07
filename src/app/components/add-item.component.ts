import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vinyl, DialogData } from '../model';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {

  pagetitle = 'Add An Album';
  vinyl: Vinyl;
  addVinyl: Vinyl;

  constructor(public dialogRef: MatDialogRef<AddItemComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.addVinyl = Object.create(this.data.vinyl);
    this.pagetitle = this.data.title;
    console.log(this.data.title);
  }

  ngOnInit() {
  }

  processForm(f: NgForm) {
    this.dialogRef.close({vinyl: this.addVinyl});
  }

  onNoClick(): void {
    this.dialogRef.close({vinyl: null});
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.addVinyl.imageSrc = reader.result;
    // console.log(this.vinyl.imageSrc);
  }

}

