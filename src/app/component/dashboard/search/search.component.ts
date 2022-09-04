import { Component, OnInit, Output,  EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  enteredSearchValue:string = "";  //binds the search data

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  //function to emit the search data
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
