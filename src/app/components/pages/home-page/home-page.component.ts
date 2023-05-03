import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get("https://fakestoreapi.com/products")
    .subscribe(response => console.log(response))
  }
}
