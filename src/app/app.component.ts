import { Component } from '@angular/core';
import { ReadDataService } from 'src/services/readdata.service';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Districts:string[];
  Regions:string;
  Stores:string[];
  regionID:number;
  storeID:number;
  title = 'dropdown-example';
  constructor(private readdata:ReadDataService){}

  getData(){
    this.readdata.getData().subscribe(x=>{
      this.Districts=x.Territories[0].Regions;
    });
  }

  getRegion(regionID){
    this.regionID=regionID;
    this.Regions= this.Districts.find(x=>x.number==regionID);
    this.Regions=this.Regions.Districts;
    //console.log(this.Regions);
  }

  getStore(storeID){
    this.storeID=storeID;
    //console.log(storeID);
    //console.log("Regions "+this.Regions);
    this.Stores= this.Regions.find(x=>x.number==storeID).Stores;
    //console.log(this.Stores.Stores);
  }
}
