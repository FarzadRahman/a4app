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
   data:any;
  constructor(public http: HttpClient,private token:TokenService) { }

  isLogIn(){
   return this.token.isValid();
  }

    logout(){
        const token=this.token.get();

        this.http.post(Constants.API_URL+'logout?token='+token,null).subscribe(data => {

                this.data=data;
                console.log(this.data);
                if (this.data.flag === 'true') {
                    this.token.remove();
                }

            }
        );


    }
  ngOnInit() {
  }

}
