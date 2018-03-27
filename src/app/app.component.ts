import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:'<div>{{title}}</div>'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   console.log('asdassdd')
  ngOnInit() { 
      this.title = "Hello"; 
	  console.log('asdasd')
   } 
}
