import { Component, inject, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Apidata } from './class/apidata';
import { ApidataService } from './services/apidata.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
}) 
export class AppComponent {

  private activatedRoute = inject(ActivatedRoute);

  apidatas?: Apidata[];

  arrayCategory : Array<{ name:string ; count:number }> =[];

  categories?: string[] = [];

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  constructor(private apidataService: ApidataService,  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    
  }


  getAlls(){
    try {
        this.apidataService.getAll().subscribe(data => {
              data.blogs.map((item:any) => {
                      let objIndex = this.arrayCategory.findIndex(obj => obj.name == item.category);
                      if(objIndex==-1){
                        this.arrayCategory.push({name:item.category, count:1});
                      }
                      else {
                        this.arrayCategory[objIndex].count ++;
                      }  
              })
              this.arrayCategory.sort((a, b) => a.count < b.count ? 1 : -1);
              // console.log(this.arrayCategory);

              this.arrayCategory.forEach((element) => { 
                this.categories?.push(element.name);
              });
              // console.log('******');
              // console.log(this.categories);
        });
    }
    catch (e) {
      console.error(e);
      this.router.navigate(['**']);
    }
  }

}



/*

  private compateTwoArray(){
    let lista : Array<{ name:string ; count:number }> =[];
    lista.push({name: 'nnnnn', count: 1});
    lista.push({name: 'dva', count: 2});
    lista.push({name: 'tri', count: 3});
    lista.push({name: 'cetiri', count: 4});
    lista.push({name: 'pet', count: 5});
    let www = [ 'jedan', 'dva', 'tri',  'dva', 'jedan' ];
    // www.sort();

    www.forEach(element => { 
           
                let objIndex = lista.findIndex(obj => obj.name == element);
                console.log(objIndex);
                if(objIndex==-1){
                  lista.push({name:element, count:1});
                }
                else {
                  lista[objIndex].count ++;
                }           
    }); 
    
     console.log(lista);
  }


  private getMostFrequentCategory(allCategory:string[]){

        const elementCounts = new Map(); 
        allCategory.forEach((element) => { 
          elementCounts.set(element, (elementCounts.get(element) || 0) + 1); 
        }); 

        let mostFrequentElement; 
        let highestFrequency = 0; 
 
        elementCounts.forEach((frequency, element) => { 
          if (frequency > highestFrequency) { 
            mostFrequentElement = element; 
            highestFrequency = frequency; 
          } 
        }); 

        console.log(`The most frequent element is ${mostFrequentElement} with a frequency of ${highestFrequency}.`); 
  }

*/