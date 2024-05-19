import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  /***
   * Input & Output használata.
   */
  @Input() siteObjectInput?: Array<any>;
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;

  constructor () {}

  // Lifecycle hook
  ngOnChanges() {
    if (this.siteObjectInput) {
      this.chosenImage = this.siteObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {
  
  }

  reload() {  
    this.imageObjectEmitter.emit(this.chosenImage);
  } 

}
