import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSiteService {

  constructor() { }

  varDatails = [
    {
    id:1,
    varName: "Combo Disney",
    varImg: "https://cdn.pixabay.com/photo/2016/04/28/16/25/disney-1359225_640.jpg"
    },
    {
    id:2,
    varName: "Combo Paris",
    varImg: "https://cdn.pixabay.com/photo/2020/01/25/19/13/paris-4793193_640.jpg"
    },
    {
      id:3,
      varName: "Combo Las Vegas",
      varImg: "https://cdn.pixabay.com/photo/2014/03/08/18/23/las-vegas-283265_640.jpg"
      },
      {
      id:4,
      varName: "Combo Tokyo",
      varImg: "https://cdn.pixabay.com/photo/2019/06/08/11/30/people-4259948_640.jpg"
      }
    ]

}
