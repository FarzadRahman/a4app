import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../../constants';
import { NgxSpinnerService } from 'ngx-spinner';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    selectedFile:File[];
    form:any;
    name:string;
  carouselImage:any= [
      {alt: 'Los Angeles', image: 'https://www.nathab.com/uploaded-files/carousels/TRIPS/Tanzania-Migration-Photo/Carousel-Tanzania-Migration-Photo-Safari-100.jpg'},
      {alt: 'Chicago', image: 'http://wowslider.com/sliders/demo-93/data1/images/landscape.jpg'},
      {alt: 'New York', image: 'http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg'},
  ];
  constructor(public http: HttpClient,private spinner: NgxSpinnerService) { }

  ngOnInit() {
      this.form=new FormGroup({
          firstName:new FormControl('',  Validators.required),
          lastName:new FormControl(''),
          image:new FormControl('')
      });
      // this.spinner.show();
      //
      // setTimeout(() => {
      //     /** spinner ends after 5 seconds */
      //     this.spinner.hide();
      // }, 5000);
  }

    onFileSelected(event) {

      this.selectedFile = event.target.files;
      console.log(this.selectedFile);
      this.form.image = this.selectedFile;

    }

    onSubmit(value) {
      console.log(value);

      this.spinner.show();
      const fd = new FormData();

      for ( var key in value ) {
            fd.append(key, value[key]);
        }


        if (this.selectedFile) {
          var i: number;
          for (i = 0 ; i < this.selectedFile.length; i++) {
              fd.append('image[]', this.selectedFile[i], this.selectedFile[i].name);
          }
      }


      this.http.post(Constants.API_URL + 'upload', fd).subscribe(data => {
              console.log(data);
              this.spinner.hide();

            },
            error => {
                console.log(error);
                // this.error=error.error.error;
                // console.log(this.error);
                this.spinner.hide();
            }
            );
    }

}
