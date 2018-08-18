import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-testimonals',
  templateUrl: './testimonals.component.html',
  styleUrls: ['./testimonals.component.css']
})
export class TestimonalsComponent implements OnInit {

  testimonials:any;

  constructor(private config:ConfigService) { 

    this.testimonials = config.config.testimonials.reviews;
  }

  ngOnInit() {
  }

}
