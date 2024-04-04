import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from '../class/apidata';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'app-filters-find-sort',
  templateUrl: './filters-find-sort.page.html',
  styleUrls: ['./filters-find-sort.page.scss'],
})
export class FiltersFindSortPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);


  isLoadApidatasList = false; 

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

  constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //  this.getAll();
  }

  private getAll(){
    try {
          this.apidataService.getAll().subscribe(data => {
                      this.apidatasList = data.blogs;
              console.log(this.apidatasList);
              this.isLoadApidatasList = true;
          });
    }
    catch (error) {
          console.log(error);
          this.router.navigate(['**']);
    }

  }

  getFilteredData(){
        this.apidatas = this.apidatasList.filter( x=> x.user_id === 10);
        console.log(this.apidatas);
    return this.apidatas;
  }

  getSortedData(){
        this.apidatas = this.apidatasList.sort( (a,b)=> a.user_id < b.user_id ? 1 : -1);
        console.log(this.apidatas);
    return this.apidatas;
  }

  changeSpecificDataInObject(){
        this.apidatasList.forEach(element=> {
            let objIndex = this.apidatasList.findIndex( element=> element.category == "math");
            if(objIndex!==-1){
              this.apidatasList[objIndex].category="XXXXXXXXXXXXX";
            }
        })
        
        this.apidatas = this.apidatasList;
        console.log(this.apidatas);
    return this.apidatas;
  }



  async getDataAfterLoad(){
      await this.loadData();
      this.apidatas = this.apidatasList;
      this.isLoadApidatasList = true;
      console.log(this.apidatas);
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
