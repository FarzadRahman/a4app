import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name:string;
    age:number;
    email:string;
    address:Address;
    hobbies:string[];
    hello:any;
    isEdit:boolean = false;
    addhb:string;
    posts:Post[];


  constructor(public http:Http) {
      console.log('constructor ran..');
  }

  ngOnInit() {
      console.log('ngOnInit ran...');
      this.name = 'Farzad Rahman';
      this.email = 'farzadrahman59@gmail.com';
      this.age = 30;
      this.address = {
          street:'50 Main st',
          city: 'Boston',
          state:'MA'
      }
      this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
      this.hello ='hello';


      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
          this.posts = data.json();
          },
          error =>{alert(error);},
          );



  }

  postEdit(id){
      this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).subscribe(data => {
          console.log(data.json());


      });

  }

  toggleEdit(){
    this.isEdit=!this.isEdit;
    }
    addHobby(){
        // console.log(hobby);
        this.hobbies.unshift(this.addhb);
        this.addhb="";
        return true;
    }

    deleteHobby(i){
        this.hobbies.splice(i, 1);
    }


  interface Address{
    street:string,
    city:string,
    state:string
  }

interface Post{
    id: number,
    title:string,
    body:string,
    userId:number
}



}
