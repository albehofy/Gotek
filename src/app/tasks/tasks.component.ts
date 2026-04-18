import { Component } from "@angular/core";
import { Task, TASKS } from "./Interfaces/Tasks.interface";
import { DatePipe } from "@angular/common";
@Component({
    selector: 'app-tasks',
    imports: [DatePipe],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    openTasks: any = [];
    appliedFilters: number = 0;
    numberOfOpenTasks: number = 0;
    numberOfCompleteTasks: number = 0;
    numberOfInProgressTasks: number = 0;
    numberOfRejectedTasks: number = 0;
    numberOfPendingTasks: number = 0;

    constructor() {
        this.openTasks = TASKS
    }
}