import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from '../class/apidata';
import { ApidataService } from '../services/apidata.service';

import { User } from '../class/user';
import { UserService } from '../services/user.service';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

/*  import * as moment from 'moment';  */

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.page.html',
  styleUrls: ['./apidata.page.scss'],
})
export class ApidataPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  apidatas?: Apidata[] = [];

  user: User = new User();
  first_name?:string='';
  last_name?:string='';

  offset = 0;

  constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router, private userService: UserService ) {}   

  ngOnInit() {
    this.getAll();
  }


  private getAll(){
    try {
        this.apidataService.getApisList(this.offset).subscribe(data => {
          data.blogs.map((item:any) => {
              if(item.id % 2 == 0){
                  item.title += " PARAN";
              }
             /* item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); */
          })
          this.apidatas = data.blogs;
          console.log(data);
        });
    }
    catch (error) {
      console.log(error);
      this.router.navigate(['**']);
    }

  }

  public onScrollLoad(){ 
    this.apidataService.getApisList(this.offset).subscribe(data => {
      console.log(data.blogs);
      data.blogs.map((item:any) =>  {
        if(item.id % 2 == 0){
          item.title += " PARAN";
        }
       /* item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); */
        this.apidatas?.push(item);
      })
     console.log(this.apidatas);
   });
  }

  onIonInfinite(ev?:any) {
    this.offset = this.offset+5;
    this.onScrollLoad();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  

  getUserFirstNameById(id?:any){
    this.userService.getApiById(id).subscribe(data => {
      this.user = data.user;
      this.first_name = this.user.first_name;
    }); 
    return this.first_name;
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




