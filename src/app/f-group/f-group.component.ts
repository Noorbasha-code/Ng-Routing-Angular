import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-f-group',
  templateUrl: './f-group.component.html',
  styleUrls: ['./f-group.component.css']
})
export class FGroupComponent implements OnInit {



  profileform = new FormGroup
    ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileform.value);
  }

  constructor() { }


  ngOnInit(): void {
  }

}
