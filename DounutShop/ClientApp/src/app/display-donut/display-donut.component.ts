import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-donut',
  templateUrl: './display-donut.component.html',
  styleUrls: ['./display-donut.component.css']
})
export class DisplayDonutComponent implements OnInit {

  constructor() { }

  @Input() public id: number = 0;
  @Input() public ref: string = "";
  @Input() public name: string = "";
  @Input() public photo: string = "";
  @Input() public photo_attribution: string = "";


  ngOnInit(): void {
  }

}
