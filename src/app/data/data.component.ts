import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data:any
  constructor() {
    this.data = [
    
      {
        "Id": 101,
        "Name": "Noor-Basha",
        "Email": "noorbasha.k@cloudcollab.co",
        "Company": "Cloud-Collab-Technology",
        "Location":"Bangloor",
        "Salary":"30k"
      },
      {
        "Id": 102,
        "Name": "Nani",
        "Email": "nani.gmail.com",
        "Company": "Google",
        "Location":"Hydrabad",
        "Salary":"50k"

      },
      {
        "Id": 103,
        "Name": "Stephen",
        "Email": "Stephen.gmail.com",
        "Company": "Accenture",
        "Location":"Chennai",
        "Salary":"40k"
      },
      {
        "Id": 104,
        "Name": "Rocky",
        "Email": "Rocky.gmail.com",
        "Company": "Main-Tech-Technologies",
        "Location":"Mumbai",
        "Salary":"15k"
      },{
        "Id": 105,
        "Name": "Jocky",
        "Email": "Jocky.gmail.com",
        "Company": "Enough-Solution",
        "Location":"Pune",
        "Salary":"15k"
      },
  ]


  }
  
removeItem(element: number) {
    this.data.forEach((value:any, index:any) => {
      if(value == element)
        this.data.splice (index, 1);
    });
  }
  ngOnInit(): void {
  }

}
