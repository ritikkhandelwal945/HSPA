import { IProperty } from './../../model/property';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyTypes:Array<string>=['House','Apartment','Duplex']
  furnishTypes:string[]=['Fully','Semi','Unfurnished']

  propertyView:IProperty={
    Id: null,
    SellRent: null,
    Name: null,
    type: null,
    Price: null
  };

  @ViewChild('Form') addPropertyForm:NgForm
  @ViewChild('formTabs') formTabs:TabsetComponent
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Congrats,form submitted");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId:number){
    this.formTabs.tabs[tabId].active = true;
  }
}

// <div class="form-group col-12">
// <input type="radio" name="SellRent">
// <label class="m-2">Sell</label>
// <input type="radio" name="SellRent">
// <label class="m-2">Rent</label>
// </div>
