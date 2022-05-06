import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { TaskBoardComponent } from './task-board/task-board.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkItemComponent,
    TaskBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
