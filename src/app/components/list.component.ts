import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vinyl } from '../model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  vinylList: Vinyl[];
  filter = 'artist';

  @Output()
  deleteVinyl = new EventEmitter<string>();

  @Output()
  editVinyl = new EventEmitter<Vinyl>();

  constructor() { }

  ngOnInit() {
  }

  filterBy(prop: string) {
    return this.vinylList.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}
