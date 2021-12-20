import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  constructor() {}
  restaurants = [];
  phone;
  address;
  name;
  edit = false;
  ngOnInit(): void {

  }
  addRestaurant() {
    this.restaurants.push({
      name: this.name,
      address: this.address,
      phone: this.phone
    });
  }

  deleteRestaurant(restaurant)  {
    let updatedArray = [];
    for (let el of this.restaurants) {
      if (el !== this.restaurants[restaurant]) {
        updatedArray.push(el);
      }
    }
    this.restaurants = updatedArray;
  }
  editRestaurant() {
    this.edit = !this.edit;
  }
  modifyRestaurant(restaurant)  {
    let updatedArray = [];

    this.editRestaurant();

  }
}
