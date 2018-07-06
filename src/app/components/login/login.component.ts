import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { Constants }  from '../../constants';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

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
  constructor(public http: HttpClient,
              private token:TokenService,
              private router:Router

  ) {
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
          this.handleResponse(data);
          },
          error => {
            // console.log(error);
            this.error=error.error.error;
            console.log(this.error);
          }
          );
    }

    whoAmI(){

        const token=this.token.get();

        this.http.post(Constants.API_URL+'me?token='+token,null).subscribe(data => {
                console.log(data);

            },
            error => {
                this.error=error.error.message;
                console.log(this.error);
            }
        );

    }


    handleResponse(data) {
        this.token.handle(data.access_token);
        // this.router.navigate('products');
        this.router.navigateByUrl('products');
    }

}
