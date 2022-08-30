import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , } from '@angular/router'
import { Details, DonutService } from '../donut.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _Activatedroute: ActivatedRoute, private DonutService: DonutService, private cartService: CartService) {

  }

  public loadedDetails: Details = new Details();
  private isNewDetailsAvailableEventSubscribed: boolean = false;

  public id: number = 0;

  ngOnInit(): void {
    let idString: string | null = "";
    idString = this._Activatedroute.snapshot.paramMap.get("id");
    this.id = Number.parseInt(idString!);
    this.GetDetails();

  }

  public GetDetails() {
    if (!this.isNewDetailsAvailableEventSubscribed) {
      this.DonutService.newDetailAvailableEvent.subscribe((gotData) => {
        this.loadedDetails = gotData;
      })
      this.isNewDetailsAvailableEventSubscribed = true;
    }
    this.DonutService.GetDonutDetails(this.id);
  }

  public addToCart(details: Details) {
    this.cartService.addToCart(details);
    window.alert('Your selection has been added to the cart!');
  }

}
