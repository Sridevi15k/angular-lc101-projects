import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      let emptyTitle = '';
      if(newTitle === ''){
         emptyTitle = "Please enter a movie title."
         }else if(this.movies.includes(newTitle)) {
         emptyTitle = "Movie title is repeated."
         } else{
         this.movies.push(newTitle);
         }
         return emptyTitle;
      }
   }
