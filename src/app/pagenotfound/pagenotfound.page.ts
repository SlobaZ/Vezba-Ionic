import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.page.html',
  styleUrls: ['./pagenotfound.page.scss'],
})
export class PagenotfoundPage implements OnInit {
  
  private activatedRoute = inject(ActivatedRoute);


  constructor() {}

  ngOnInit() {

  }


}


