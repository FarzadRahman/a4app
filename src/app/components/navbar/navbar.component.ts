import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../services/token.service';
import {Constants} from '../../constants';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public http: HttpClient,private token:TokenService) { }

  isLogIn(){
   return this.token.isValid();
  }

    logout(){
        const token=this.token.get();

        this.http.post(Constants.API_URL+'logout?token='+token,null).subscribe(data => {
                console.log(data);
                if (data.flag === 'true') {
                    this.token.remove();
                }

            },
            error => {
                // console.log(error);
                this.error=error.error.error;
                console.log(this.error);
            }
        );


    }
  ngOnInit() {
  }

}
