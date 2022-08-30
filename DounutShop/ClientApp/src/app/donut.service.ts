import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private httpClient: HttpClient) { }
  @Output() newDonutsAvailableEvent = new EventEmitter<BigDonut>();
  @Output() newDetailAvailableEvent = new EventEmitter<Details>();

  private storedBigDonut: BigDonut = new BigDonut;
  private storedSingleDonut: Details = new Details;

  public GetInfoFromServer() {
    let apiUrl: string = "https://grandcircusco.github.io/demo-apis/donuts.json";
    this.httpClient.get<BigDonut>(apiUrl).subscribe((gotData) => {
      this.storedBigDonut = gotData;
      this.newDonutsAvailableEvent.emit(this.storedBigDonut);
    });
  }


  public GetDonutDetails(id: number) {
    let apiURL: string = "https://grandcircusco.github.io/demo-apis/donuts/" + id.toString() + ".json";
    this.httpClient.get<Details>(apiURL).subscribe((gotData) => {
      this.storedSingleDonut = gotData;
      this.newDetailAvailableEvent.emit(this.storedSingleDonut);
    });
  }
}




export class BigDonut {
  public count: number = 0;
  public results: DonutInfo[] = [];

}

export class DonutInfo { 
  public id: number = 0;
  public ref: string = "";
  public name: string = "";
  public photo: string = "";
  public photo_attribution: string = "";
}

export class Details {
  public id: number = 0;
  public ref: string = "";
  public name: string = "";
  public calories: string = "";
  public extras: string[] = [];
  public photo: string = "";
  public photo_attribution: string = "";
}

