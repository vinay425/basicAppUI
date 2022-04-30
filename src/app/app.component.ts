import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyApp';
  constructor(private router:Router){}
  ngOnInit(): void {
    // var status=localStorage.getItem("checkUser");
    // if(status)
    //   this.router.navigate(['/welcome']);
    // else
    //   this.router.navigate(['/']);
  }
}
