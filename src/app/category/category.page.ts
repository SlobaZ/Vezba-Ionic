import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from '../class/apidata';
import { ApidataService } from '../services/apidata.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss']
})
export class CategoryPage implements OnInit {
  
  public category!: string;
  private activatedRoute = inject(ActivatedRoute);

  apidatas?: Apidata[] = [];

  apidatasCategoryes: Array<{	
    content_text?: string;
    user_id?: number;
	  title?: string;
    photo_url?: any;
    created_at?: string;
    id?:any;
    description?:string;
    content_html?:string;
    category?:string;
    updated_at?:any;}> =[];

    apidataSearchs: Array<{	
      content_text?: string;
      user_id?: number;
      title?: string;
      photo_url?: any;
      created_at?: string;
      id?:any;
      description?:string;
      content_html?:string;
      category?:string;
      updated_at?:any;}> =[];

    searchValue = '';

    showInput = false;
    showSpiner = true;

  
  constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router) {}   


  ngOnInit() {
      this.GetAllByCategory();
  }
  
async GetAllByCategory(){
        await this.loadData();
        this.showInput = true;
        this.showSpiner = false;
        console.log(this.apidatas)
}

async handleInput(event:any) {
      this.searchValue = event.target.value;  
      this.apidatas = [];
      this.showSpiner = true;
      setTimeout(async()=> {this.showSpiner = false; await this.searchData();}, 3000); 
       
}

  loadData(){
    return new Promise((resolve, reject) => {
        try {
          this.category = this.activatedRoute.snapshot.paramMap.get('id') as string;
          this.apidataService.getAll().subscribe(data => {
                  this.apidatasCategoryes = data.blogs;
                  resolve( this.apidatas = this.apidatasCategoryes.filter(c=>c.category===this.category));
          });
          }
          catch (error) {
                console.log(error);
                reject(this.router.navigate(['**']));
          }
    });
  }


  searchData(){
    return new Promise((resolve, reject) => {
      try {
            resolve(this.apidatas = this.apidatasCategoryes.filter(c=> c.title===this.searchValue || c.content_text?.startsWith(this.searchValue)) );
        }
        catch (error) {
              console.log(error);
              reject(this.router.navigate(['**']));
        }
  });
  }







}





/*

private getAll(){
    try {
        this.category = this.activatedRoute.snapshot.paramMap.get('id') as string;
          this.apidataService.getAll().subscribe(data => {
                data.blogs.map((item:any) => {
                      this.apidatasCategoryes = data.blogs;
                      this.apidatas = this.apidatasCategoryes.filter(c=>c.category===this.category);
                }) 
              console.log(this.apidatas);
          });
    }
    catch (error) {
          console.log(error);
          this.router.navigate(['**']);
    }

  }


*/