import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nameedit',
  templateUrl: './nameedit.component.html',
  styleUrls: ['./nameedit.component.css']
})
export class NameeditComponent implements OnInit {


  name = new FormControl('');
  
  updatename()
  {
    this.name.setValue('Nani');
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
