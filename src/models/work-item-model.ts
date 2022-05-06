import { ItemPriority } from './../enums/work-item-priority-enum';
import { Assignee } from './assignee-model';
import { ItemStatus } from '../enums/work-item-status-enum';

export class WorkItem {
    constructor(private _title:string,  private _assignee:Assignee, 
        private _status:ItemStatus, private _priority:ItemPriority, private _description?:string){

        }
    
    get title(){
        return this._title;
    }
    set title(new_title:string){
        this._title = (new_title != "") ? new_title : this.title;
    }

    get assignee(){
        return this._assignee;
    }
    set assignee(new_assignee:Assignee){
        this._assignee = (new_assignee) ? new_assignee : this._assignee;
    }

    get status(){
        return this._status;
    }
    set status(new_status:ItemStatus){
        this._status = (new_status) ? new_status : this._status;
    }

    get priority(){
        return this._priority;
    }
    set priority(new_priority:ItemPriority){
        this._priority = (new_priority) ? new_priority : this._priority;
    }

    get description(){
        return this._description;
    }
    set description(new_description:string){
        this._description = new_description;
    }

}