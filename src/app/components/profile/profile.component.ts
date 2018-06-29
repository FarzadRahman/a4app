import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  image: File;
  carouselImage:any= [
      {alt: 'Los Angeles', image: 'https://www.nathab.com/uploaded-files/carousels/TRIPS/Tanzania-Migration-Photo/Carousel-Tanzania-Migration-Photo-Safari-100.jpg'},
      {alt: 'Chicago', image: 'http://wowslider.com/sliders/demo-93/data1/images/landscape.jpg'},
      {alt: 'New York', image: 'http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
