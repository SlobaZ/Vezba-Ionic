// import { Component, inject, OnInit } from '@angular/core'; 
// import { ActivatedRoute, Router } from '@angular/router';

// import { Apidata } from '../class/apidata';
// import { ApidataService } from '../services/apidata.service';

// import { User } from '../class/user';
// import { UserService } from '../services/user.service';

// import { InfiniteScrollCustomEvent } from '@ionic/angular';

// import * as moment from 'moment';  

// @Component({
//   selector: 'app-apidata',
//   templateUrl: './apidata.page.html',
//   styleUrls: ['./apidata.page.scss'],
// })
// export class ApidataPage implements OnInit {

//   private activatedRoute = inject(ActivatedRoute);

//   public id!: any;

//   apidatas?: Apidata[] = [];

//   apidatasList: Array<{	
//     content_text?: string;
//     user_id?: number;
// 	  title?: string;
//     photo_url?: any;
//     created_at?: string;
//     id?:any;
//     description?:string;
//     content_html?:string;
//     category?:string;
//     updated_at?:any;
//   }> =[];


//   user: User = new User();

//   offset = 0;

//   searchValue = '';

//   showInput = false;
//   showSpiner = true;

//   constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router, private userService: UserService ) {}   

//   ngOnInit() {
//         this.startApiData();
//   }

//   private startApiData(){ 
//         this.id = this.activatedRoute.snapshot.paramMap.get('id') as any;
//         console.log('*** ' + this.id);
//         if(!isNaN(this.id)){
//           this.getFilteredDataByUserID();
//         }
//         else if(this.id === "all"){
//           this.getAll();
//         }
//         else if(typeof this.id === "string"){
//           this.GetAllByCategory();
//         }

//   }

//   /* ALL  */

//   private getAll(){
//     this.showInput = true;
//     this.showSpiner = false;
//     try {
//         this.apidataService.getApisList(this.offset).subscribe(data => {
//           data.blogs.map((item:any) => {
//               item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); 
//               item.updated_at = moment(item.updated_at).format('DD. MM. YYYY.'); 
//           })
//           this.apidatas = data.blogs;
//           console.log(data);
//         });
//     }
//     catch (error) {
//       console.log(error);
//       this.router.navigate(['**']);
//     }

//   }

//   /* INFINITE SCROLL  */
//   onIonInfinite(ev?:any) {
//       if(this.id === "all"){
//           this.offset = this.offset+5;
//           this.onScrollLoad();
//       }
//       setTimeout(() => {
//         (ev as InfiniteScrollCustomEvent).target.complete();
//       }, 500);
//     }

//   public onScrollLoad(){ 
//     this.apidataService.getApisList(this.offset).subscribe(data => {
//       console.log(data.blogs);
//       data.blogs.map((item:any) =>  {
//         item.updated_at = moment(item.updated_at).format('DD. MM. YYYY.'); 
//         item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); 
//         this.apidatas?.push(item);
//       })
//      console.log(this.apidatas);
//    });
//   }


//   /* INPUT */
//   async handleInput(event:any) {
//       this.searchValue = event.target.value;  
//       this.apidatas = [];
//       this.showSpiner = true;
//       setTimeout(async()=> {this.showSpiner = false; await this.searchData();}, 3000);   
//   }

//   searchData(){
//       return new Promise((resolve, reject) => {
//         try {
//               resolve(this.apidatas = this.apidatasList.filter(c=> c.title===this.searchValue || c.content_text?.startsWith(this.searchValue)) );
//           }
//           catch (error) {
//                 console.log(error);
//                 reject(this.router.navigate(['**']));
//           }
//       });
// }
  

//   getUserById(id?:any){
//       this.userService.getApiById(id).subscribe(data => {
//         this.user = data.user;
//       }); 
//       return this.user;
//   }


//   /* CATEGORY  */

//  async GetAllByCategory () {
//     await this.loadApiDatas();
//     this.apidatas = this.apidatasList.filter(c=>c.category===this.id)
//     this.showInput = true;
//     this.showSpiner = false;
//     console.log(this.apidatas)
// }





// /* USERS BY ID APIDATAS  */

// async getFilteredDataByUserID(){
//       await this.loadApiDatas();
//       this.showInput = true;
//       this.showSpiner = false;
//       this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));    /* this.route.snapshot.params['id']; */
//       // debugger;
//       this.apidatas = this.apidatasList.filter( x=> x.user_id === this.id);
// return this.apidatas;
// }




// loadApiDatas(){
//   return new Promise((resolve, reject) => {
//       try {
//         this.apidataService.getAll().subscribe(data => {
//               resolve(this.apidatasList = data.blogs);
//         });
//         }
//         catch (error) {
//               console.log(error);
//               reject(this.router.navigate(['**']));
//         }
//   });
// }





// }












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





import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from '../class/apidata';
import { ApidataService } from '../services/apidata.service';

import { User } from '../class/user';
import { UserService } from '../services/user.service';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

import * as moment from 'moment';  

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.page.html',
  styleUrls: ['./apidata.page.scss'],
})
export class ApidataPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  public id?: any;

  apidata : {
    content_text?: string;
    user_id?: number;
    user_first_name?: string;
    user_last_name?: string;
	  title?: string;
    photo_url?: any;
    created_at?: string;
    id?:any;
    description?:string;
    content_html?:string;
    category?:string;
    updated_at?:any;
  } = {};

  apidatas: Array<{	
    content_text?: string;
    user_id?: number;
    user_first_name?: string;
    user_last_name?: string;
	  title?: string;
    photo_url?: any;
    created_at?: string;
    id?:any;
    description?:string;
    content_html?:string;
    category?:string;
    updated_at?:any;
  }> =[];

  apidatasList: Array<{	
    content_text?: string;
    user_id?: number;
    user_first_name?: string;
    user_last_name?: string;
	  title?: string;
    photo_url?: any;
    created_at?: string;
    id?:any;
    description?:string;
    content_html?:string;
    category?:string;
    updated_at?:any;
  }> =[];


  users : Array<{	
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
    longitude?: number;
  }> =[];

  offset = 0;

  searchValue = '';

  showInput = false;
  showSpiner = true;

  constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router, private userService: UserService ) {}   

  ngOnInit() {
        this.startApiData();
  }

  private startApiData(){ 
        this.id = this.activatedRoute.snapshot.paramMap.get('id') as any;
        if(!isNaN(this.id)){
          this.getFilteredDataByUserID();
        }
        else if(this.id === "all"){
          this.getAll();
        }
        else if(typeof this.id === "string"){
          this.GetAllByCategory();
        }

  }

  /* ALL  */

 async getAll(){
    this.showInput = true;
    this.showSpiner = false;
    await this.getAllUsers();      
    console.log(this.users);
    try {
        this.apidataService.getApisList(this.offset).subscribe(data => {
            data.blogs.map((item:any) => {
                    item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); 
                    item.updated_at = moment(item.updated_at).format('DD. MM. YYYY.'); 
                    this.apidata = item;
                    let obj = this.users.find(x=> x.id === item.user_id);
                    this.apidata.user_first_name = obj?.first_name;
                    this.apidata.user_last_name = obj?.last_name;
                    this.apidatas?.push(this.apidata);
            });
        });
          console.log(this.apidatas);  
    }
    catch (error) {
      console.log(error);
      this.router.navigate(['**']);
    }

  }

  /* INFINITE SCROLL  */
  onIonInfinite(ev?:any) {
      if(this.id === "all"){
          this.offset = this.offset+5;
          this.onScrollLoad();
      }
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    }

  public onScrollLoad(){ 
    this.apidataService.getApisList(this.offset).subscribe(data => {
      console.log(data.blogs);
      data.blogs.map((item:any) =>  {
              item.updated_at = moment(item.updated_at).format('DD. MM. YYYY.'); 
              item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); 
              this.apidata = item;
              let obj = this.users.find(x=> x.id === item.user_id);
              this.apidata.user_first_name = obj?.first_name;
              this.apidata.user_last_name = obj?.last_name;
              this.apidatas?.push(this.apidata);
      })
     console.log(this.apidatas);
   });
  }


  /* INPUT */
  async handleInput(event:any) {
      this.searchValue = event.target.value;  
      this.apidatas = [];
      this.showSpiner = true;
      setTimeout(async()=> {this.showSpiner = false; await this.searchData();}, 3000);   
  }

  searchData(){
      return new Promise((resolve, reject) => {
        try {
              resolve(this.apidatas = this.apidatasList.filter(c=> c.title===this.searchValue || c.content_text?.startsWith(this.searchValue)) );
          }
          catch (error) {
                console.log(error);
                reject(this.router.navigate(['**']));
          }
      });
}
  

getAllUsers() {
  return new Promise((resolve, reject) => {
    try {
      this.userService.getAllList().subscribe(data => {
            resolve(this.users = data.users);
      });
      }
      catch (error) {
            console.log(error);
            reject(this.router.navigate(['**']));
      }
    });
}


  /* CATEGORY  */

 async GetAllByCategory () {
    await this.getAllUsers(); 
    await this.loadApiDatas();
    this.apidatas = this.apidatasList.filter(c=>c.category===this.id)
    this.showInput = true;
    this.showSpiner = false;
    console.log(this.apidatas)
}





/* USERS BY ID APIDATAS  */

async getFilteredDataByUserID(){
      await this.getAllUsers(); 
      await this.loadApiDatas();
      this.showInput = true;
      this.showSpiner = false;
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));    /* this.route.snapshot.params['id']; */
      // debugger;
      this.apidatas = this.apidatasList.filter( x=> x.user_id === this.id);
return this.apidatas;
}


loadApiDatas(){
  return new Promise((resolve, reject) => {
      try {
        this.apidataService.getAll().subscribe(data => {
              resolve(
                data.blogs.map((item:any) =>  {
                  item.updated_at = moment(item.updated_at).format('DD. MM. YYYY.'); 
                  item.created_at = moment(item.created_at).format('DD. MM. YYYY.'); 
                  this.apidata = item;
                  let obj = this.users.find(x=> x.id === item.user_id);
                  this.apidata.user_first_name = obj?.first_name;
                  this.apidata.user_last_name = obj?.last_name;
                  this.apidatasList?.push(this.apidata); 
                  })
              );
        });
        }
        catch (error) {
              console.log(error);
              reject(this.router.navigate(['**']));
        }
  });
}


// loadApiDatas(){
//   return new Promise((resolve, reject) => {
//       try {
//         this.apidataService.getAll().subscribe(data => {
//               resolve(this.apidatasList = data.blogs);
//         });
//         }
//         catch (error) {
//               console.log(error);
//               reject(this.router.navigate(['**']));
//         }
//   });
// }





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




