import { Comments } from './classes/comments';
import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _freeApiService: freeApiService) {
    
  }
  lstcomments:Comments[];
  
  ngOnInit() {
    this._freeApiService.getcomments()
     .subscribe
    (
      data=>
     {
     
       this.lstcomments = data;

    }
    );
  }
}
