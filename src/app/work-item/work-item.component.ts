import { WorkItem } from './../../models/work-item-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  @Input("item") item: WorkItem;

  constructor() { }

  ngOnInit(): void {
  }

}
