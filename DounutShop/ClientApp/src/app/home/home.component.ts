import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { DonutService, DonutInfo, BigDonut } from '../donut.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public loadedDonuts: BigDonut = new BigDonut();
  private isNewDonutAvailableEventSubscribed: boolean = false;

  constructor(private thisDonutService: DonutService) {

  }
  ngOnInit(): void {
    this.getDonutList();
  }  
  private isNewPostsAvailableEventSubscribed: boolean = false;
  public getDonutList() {
    // The order is important here.  If we subscribe FIRST, we can guarantee we will receive
    // all data provided by the event.  If we subscribe SECOND, we may not.
    if (!this.isNewPostsAvailableEventSubscribed) {
      this.thisDonutService.newDonutsAvailableEvent.subscribe((gotData) => {
        for (let currElementNo = 0; currElementNo < gotData.results.length; currElementNo++)
          this.loadedDonuts.results.push(gotData.results[currElementNo]);
        console.log("Data arrived!  We got " + gotData.results.length.toString() + " records.");
      })
      this.isNewDonutAvailableEventSubscribed = true;
    }
    this.thisDonutService.GetInfoFromServer();
  }
}



