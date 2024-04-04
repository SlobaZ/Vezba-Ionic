import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../services/user.service';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

// import * as moment from 'moment';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  users?: User[]  = [];

  usersList: Array<{	
    id?: number;
    gender?: string;
    date_of_birth?: string;
    job?: string;
    city?: string;
    zipcode?: number;
    latitude?: number;
    profile_picture?: any;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    street?: string;
    state?: string;
    country?: string;
    longitude?: number;}> =[];

  countryList?: Array<{ country?: string; }> =[];
  country?:string='';

  offset = 0;

  constructor(private userService: UserService,  private route: ActivatedRoute, private router: Router ) {}   

  ngOnInit() {
    this.getAll();
    this.getAllCountryOfUsers();
  }


  private getAll(){
    try {
        this.userService.getAll(this.offset).subscribe(data => {
          data.users.map((item:any) =>  {
            this.users?.push(item);
            this.usersList?.push(item);
          })
          console.log(data);
        });
    }
    catch (error) {
      console.log(error);
      this.router.navigate(['**']);
    }

  }

  public onScrollLoad(){ 
    this.userService.getAll(this.offset).subscribe(data => {
      console.log(data.users);
      data.users.map((item:any) =>  {
        this.users?.push(item);
      })
     console.log(this.users);
   });
  }

  onIonInfinite(ev?:any) {
    this.offset = this.offset+5;
    this.onScrollLoad();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  
  getAllCountryOfUsers(){
    this.userService.getAllList().subscribe(data => {
          data.users.map((item:any) =>  {
            this.countryList?.push(item.country);
          })
     console.log(this.countryList);
   });
  }

    handleChange(event?:any) {
    // this.country = event.detail.value;
    this.country = event.target.value;
    console.log(this.country);
    this.users = this.usersList.filter( x=> x.country === this.country);
    console.log('ionChange fired with value: ' + event.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }




}












  /*   PAGINATION

  page=1;
  offset=0;

    private getAll(){
    this.apidataService.getApisList(this.offset).subscribe(data => {
       this.apidatas = data.blogs;
      console.log(data);
    });
  }

  plusPage() {
    this.page++;
    this.offset = this.page*10;
    this.getAll();
  }

  minusPage() {
    if(this.offset>0){
      this.page--;
      this.offset = this.page*10;
      this.getAll();
    }
  }

*/




