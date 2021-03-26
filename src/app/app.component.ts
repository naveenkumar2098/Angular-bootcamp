import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first-app';
  todaydate = new Date();
  demoString = "This is demo of pipes, custom Pipe demo";
  reverseString = "Demo of Reverse string custom pipe";
  vowelString: string = `Let's checkout how much vowels this string contains`;
  loadedPosts: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.fetchPosts();
  }

  onfetchPosts(){
    this.fetchPosts();
  }

  private fetchPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(posts => {
      this.loadedPosts=posts;
    })
  }
}
