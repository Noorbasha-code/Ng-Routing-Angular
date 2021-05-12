import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  userForm: FormGroup;
  listData: any;
  

  constructor(private fb: FormBuilder) {

    this.listData = [];

    this.userForm = this.fb.group
      ({

          Id: ['', Validators.required],
          Name: ['', Validators.required],
          Email: ['', Validators.required],
          Company: ['', Validators.required],
          Location: ['', Validators.required],
          Salary: ['', Validators.required]
          
    })
  }
  public addItem(): void{
    this.listData.push(this.userForm.value);
    
  }
  reset() {
    this.userForm.reset();
 }
  removeItem(element: number) {
    this.listData.forEach((value:any, index:any) => {
      if(value == element)
        this.listData.splice (index, 1);
    });
  }

  
  onkeypress(event: any) {
    console.log(event);
    
  }
  
  // onNameSubmitted(name: string) {
  //   console.log(name);
    
  // }
  ngOnInit(): void {

  }


}
