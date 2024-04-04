import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from '../class/apidata';
import { ApidataService } from '../services/apidata.service';


@Component({
  selector: 'app-userview-apidata',
  templateUrl: './userview-apidata.page.html',
  styleUrls: ['./userview-apidata.page.scss'],
})
export class UserviewApidataPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  id?:number;

  apidatas?: Apidata[] = [];

  apidatasList: Array<{	
    content_text?: string;
    user_id?: any;
	  title?: string;
    photo_url?: any;
    created_at?: string;
    id?:any;
    description?:string;
    content_html?:string;
    category?:string;
    updated_at?:any;}> =[];


  constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router ) {}   

  ngOnInit() {
      this.getFilteredData();
  }

  async getFilteredData(){
    await this.loadData();
    // debugger;
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));    /* this.route.snapshot.params['id']; */
    // debugger;
    this.apidatas = this.apidatasList.filter( x=> x.user_id === this.id);
    console.log(this.apidatas, this.apidatasList,this.id);
  return this.apidatas;
  }




loadData(){
    return new Promise((resolve, reject) => {
        try {
          this.apidataService.getAll().subscribe(data => {
                resolve(this.apidatasList = data.blogs);
          });
          }
          catch (error) {
                console.log(error);
                reject(this.router.navigate(['**']));
          }
    });
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




