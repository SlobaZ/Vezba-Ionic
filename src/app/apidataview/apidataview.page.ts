import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from '../class/apidata';
import { ApidataService } from '../services/apidata.service';

@Component({
  selector: 'app-apidataview',
  templateUrl: './apidataview.page.html',
  styleUrls: ['./apidataview.page.scss'],
})
export class ApidataviewPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  id?:any;
  apidata: Apidata = new Apidata();


  constructor(private apidataService: ApidataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    
        try {
          this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;    /* this.route.snapshot.params['id']; */
          console.log(this.route.snapshot.params['id']);
                this.apidataService.getApiById(this.id).subscribe(data => {
                  this.apidata = data.blog;
                  console.log(this.apidata);
                });   
        }
        catch (error) {
            console.log(error);
            this.router.navigate(['/**']);
        }
    
  }
  
  


}

 

