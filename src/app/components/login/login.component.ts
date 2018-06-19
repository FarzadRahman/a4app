import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Constants }  from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public form = {
        email: null,
        password: null
    };
    error:null;
  constructor(public http: HttpClient) {
    // For Constant Variables
      /*let url = Constants.API_URL;
      console.log(Constants.API_URL);*/

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit Clicked');
      this.http.post(Constants.API_URL+'login',this.form).subscribe(data => {
          console.log(data);
          },
          error => {
            // console.log(error);
            this.error=error.error.error;
            console.log(this.error);
          }
          );
    }

}
