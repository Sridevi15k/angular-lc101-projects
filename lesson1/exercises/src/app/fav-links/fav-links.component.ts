import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["www.launchcode.org", "www.hackerrank.com"];
  gif = "https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif";
  constructor() { }

  ngOnInit() {
  }

}
