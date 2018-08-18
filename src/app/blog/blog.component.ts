import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs:any;
  constructor(private http: HttpClient) { 

    this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@FreeCodeCamp")     .subscribe(data => this.blogs = data.items);

    console.log("data is",this.blogs)


    console.log(this.http.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@FreeCodeCamp").subscribe(data => console.log("data is",data.items) ));

  }

  ngOnInit() {
  }

}
