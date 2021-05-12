import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  a: string="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.a = "basha";
    this.route.paramMap.subscribe(data => {
    console.log(data.get('technology'));
    })
  }

}
