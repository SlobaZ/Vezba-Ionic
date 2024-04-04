import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../class/user';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.page.html',
  styleUrls: ['./userview.page.scss'],
})
export class UserviewPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  id?:any;
  user: User = new User();

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
      this.getUserById();
  }

  getUserById() {
    try {
      this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;    /* this.route.snapshot.params['id']; */
      console.log(this.route.snapshot.params['id']);
            this.userService.getApiById(this.id).subscribe(data => {
              this.user = data.user;
              console.log(this.user);
            });   
    }
    catch (error) {
        console.log(error);
        this.router.navigate(['/**']);
    }
  }
  
  


}

 

