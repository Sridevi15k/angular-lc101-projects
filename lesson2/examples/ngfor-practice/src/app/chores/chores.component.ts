import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [
      {title: "Yesterday's Chores", tasks: ["Empty Dishwasher", "Start LaunchCode prep work", "Buy groceries"]},
      {title: "Today's Chores", tasks: ["Load Dishwasher", "Finish LaunchCode prep work", "Buy Groceries"]},
      {title: "Tomorrow's Chores", tasks: ["Empty dishwasher AGAIN", "Play with LaunchCode Practice", "Groceries AGAIN"]},
   ];


   constructor() { }

   ngOnInit() {
   }

}
