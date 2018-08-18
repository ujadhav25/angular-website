import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private http: HttpClient) {
    console.log(this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@FreeCodeCamp").subscribe(data => console.log("data is",data) ));
   }

  ngOnInit() {
  }

}
