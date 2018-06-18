import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $:any; //For Jquery
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name: string='Farzad Rahman';
    age: number=30;
    email: string='farzadrahman59@gmail.com';
    address: any;
    hobbies: string[];
    isEdit = false;
    addhb: string;
    posts: any;
    editPost: any;



    constructor(public http: HttpClient) {
        console.log('constructor ran..');

    }

    ngOnInit() {

        $( "#alert" ).click(function() {
            alert( "Handler for .click() called." );
        });

        this.address = {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
        };
        this.editPost = {
            id: 0,
            title: '',
            body: '',
            userId: 0
        };
        this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
        this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
                // console.log(data);
                this.posts = data;
            },
            err => {
                console.log("Error occured.");
            }
        );

    }

    postEdit(id) {
        this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).subscribe(data => {
            this.editPost = data;

        });

    }

    toggleEdit() {
        this.isEdit = !this.isEdit;
    }
    addHobby() {
        // console.log(hobby);
        this.hobbies.unshift(this.addhb);
        this.addhb = '';
        return true;
    }

    deleteHobby(i) {
        this.hobbies.splice(i, 1);
    }






}
