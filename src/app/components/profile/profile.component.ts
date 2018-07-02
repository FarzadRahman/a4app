import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../constants';
import  { Constants }  from '../../constants';
import any = jasmine.any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    selectedFile []: File;
  carouselImage:any= [
      {alt: 'Los Angeles', image: 'https://www.nathab.com/uploaded-files/carousels/TRIPS/Tanzania-Migration-Photo/Carousel-Tanzania-Migration-Photo-Safari-100.jpg'},
      {alt: 'Chicago', image: 'http://wowslider.com/sliders/demo-93/data1/images/landscape.jpg'},
      {alt: 'New York', image: 'http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg'},
  ];
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

    onFileSelected(event) {

      this.selectedFile = <File>event.target.files;
      console.log(this.selectedFile);

    }

    onSubmit() {
      const fd=new FormData();
        var i:number;

      for (i = 0 ; i < this.selectedFile.length; i++) {
          fd.append('image[]',this.selectedFile[i],this.selectedFile[i].name);
      }

        this.http.post(Constants.API_URL + 'upload',fd).subscribe(data => {
                console.log(data);

            },
            error => {
                console.log(error);
                // this.error=error.error.error;
                // console.log(this.error);
            }
        );
    }

}
