import { Component } from "@angular/core";
import { Task, TASKS } from "./Interfaces/Tasks.interface";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DragDropModule, CdkDragDrop } from "@angular/cdk/drag-drop";

// Using standalone mode
@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [DatePipe, FormsModule, DragDropModule],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    allTasks: Task[] = [];
    appliedFilters: number = 0;

    // Modal state
    showAddModal = false;
    showEditModal = false;
    showDeleteModal = false;
    showHistoryModal = false;
    selectedTask: Task | null = null;
    taskHistory: any[] = [];
    
    // Form data
    formData = {
        title: '',
        description: '',
        priority: 'medium' as 'low' | 'medium' | 'high',
        assignedTo: '',
        dueDate: '',
        images: [] as {file: File; preview: string}[],
        comments: [] as {author: string; text: string; time: Date}[],
        newComment: ''
    };

    readonly TEAM_MEMBERS = [
        'Mohamed Reda',
        'Ahmed Zeinhom',
        'Sara fawzy',
        'Shimaa Attia',
        'Abd el-hady Moustafa'
    ];

    constructor() {
        this.allTasks = TASKS as unknown as Task[];
        this.initializeHistory();
    }

    /**
     * Initialize history for all tasks
     */
    initializeHistory(): void {
        this.allTasks.forEach(task => {
            if (!task.history) {
                task.history = [
                    {
                        type: 'created',
                        author: 'System',
                        description: 'Task created',
                        timestamp: task.createdAt || new Date(),
                        details: `Task "${task.title}" was created`
                    }
                ];
            }
        });
    }

    /**
     * Get tasks by status
     */
    getTasksByStatus(status: Task['status']): Task[] {
        return this.allTasks.filter(task => task.status === status);
    }

    /**
     * Get all open tasks
     */
    getOpenTasks(): Task[] {
        return this.getTasksByStatus('open');
    }

    /**
     * Get all in-progress tasks
     */
    getInProgressTasks(): Task[] {
        return this.getTasksByStatus('in_progress');
    }

    /**
     * Get all in-review tasks
     */
    getInReviewTasks(): Task[] {
        return this.getTasksByStatus('in_review');
    }

    /**
     * Get all blocked tasks
     */
    getBlockedTasks(): Task[] {
        return this.getTasksByStatus('blocked');
    }

    /**
     * Get all closed tasks
     */
    getClosedTasks(): Task[] {
        return this.getTasksByStatus('closed');
    }

    /**
     * Get all rejected tasks
     */
    getRejectedTasks(): Task[] {
        return this.getTasksByStatus('rejected');
    }

    /**
     * Get all reopened tasks
     */
    getReopenedTasks(): Task[] {
        return this.getTasksByStatus('reopened');
    }

    /**
     * Get all completed tasks
     */
    getCompletedTasks(): Task[] {
        return this.getTasksByStatus('completed');
    }

    /**
     * Handle task drop event
     */
    onTaskDropped(event: CdkDragDrop<Task[]>, newStatus: Task['status']): void {
        // If dropped in the same list, don't process
        if (event.previousContainer === event.container) {
            return;
        }

        // Get the dropped task
        const task = event.previousContainer.data[event.previousIndex];

        // Update task status
        this.updateStatus(task, newStatus);
    }

    /**
     * Update task status and log the change
     */
    updateStatus(task: Task, newStatus: Task['status']): void {
        const oldStatus = task.status;
        
        // Update the task status
        task.status = newStatus;
        task.updatedAt = new Date();

        // Add history entry
        if (!task.history) {
            task.history = [];
        }
        task.history.push({
            type: 'status_changed',
            author: 'Current User',
            description: `Status changed from ${oldStatus} to ${newStatus}`,
            timestamp: new Date(),
            details: `Task moved from "${oldStatus}" column to "${newStatus}" column`
        });

        // Log the status change
        console.log('=== Task Status Updated ===');
        console.log(`Task ID: ${task.id}`);
        console.log(`Task Title: ${task.title}`);
        console.log(`Previous Status: ${oldStatus}`);
        console.log(`New Status: ${newStatus}`);
        console.log(`Assigned To: ${task.assignedTo}`);
        console.log(`Updated At: ${task.updatedAt.toLocaleString()}`);
        console.log('===========================');
    }

    /**
     * Open Add Task Modal
     */
    openAddModal(): void {
        this.resetForm();
        this.showAddModal = true;
    }

    /**
     * Open Edit Task Modal
     */
    openEditModal(task: Task): void {
        this.selectedTask = task;
        this.formData = {
            title: task.title,
            description: task.description || '',
            priority: task.priority || 'medium',
            assignedTo: task.assignedTo || '',
            dueDate: task.dueDate ? task.dueDate.toISOString().split('T')[0] : '',
            images: [],
            comments: [
                {
                    author: 'Mohamed Reda',
                    text: 'Great progress on this task!',
                    time: new Date(Date.now() - 3600000)
                }
            ],
            newComment: ''
        };
        this.showEditModal = true;
    }

    /**
     * Open Delete Task Modal
     */
    openDeleteModal(task: Task): void {
        this.selectedTask = task;
        this.showDeleteModal = true;
    }

    /**
     * Open Task History Modal
     */
    openHistoryModal(task: Task): void {
        this.selectedTask = task;
        this.taskHistory = task.history || [];
        this.showHistoryModal = true;
    }

    /**
     * Close all modals
     */
    closeModals(): void {
        this.showAddModal = false;
        this.showEditModal = false;
        this.showDeleteModal = false;
        this.showHistoryModal = false;
        this.selectedTask = null;
        this.resetForm();
    }

    /**
     * Reset form data
     */
    resetForm(): void {
        this.formData = {
            title: '',
            description: '',
            priority: 'medium',
            assignedTo: '',
            dueDate: '',
            images: [],
            comments: [],
            newComment: ''
        };
    }

    /**
     * Handle image selection
     */
    onImageSelect(event: Event, type: string): void {
        const input = event.target as HTMLInputElement;
        const files = input.files;

        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const reader = new FileReader();

                reader.onload = (e: ProgressEvent<FileReader>) => {
                    if (e.target?.result) {
                        this.formData.images.push({
                            file: file,
                            preview: e.target.result as string
                        });
                    }
                };

                reader.readAsDataURL(file);
            }
        }

        // Reset input
        input.value = '';
    }

    /**
     * Remove image from preview
     */
    removeImage(index: number, type: string): void {
        this.formData.images.splice(index, 1);
    }

    /**
     * Add comment to task
     */
    addComment(type: string): void {
        if (!this.formData.newComment.trim()) {
            return;
        }

        const comment = {
            author: 'Current User',
            text: this.formData.newComment,
            time: new Date()
        };

        this.formData.comments.push(comment);

        console.log('Comment added:', comment);
        this.formData.newComment = '';
    }

    /**
     * Add new task
     */
    addTask(): void {
        if (!this.formData.title.trim()) {
            alert('Task title is required');
            return;
        }

        const newTask: Task = {
            id: Math.max(...this.allTasks.map(t => t.id), 0) + 1,
            title: this.formData.title,
            description: this.formData.description,
            status: 'open',
            priority: this.formData.priority,
            assignedTo: this.formData.assignedTo,
            dueDate: this.formData.dueDate ? new Date(this.formData.dueDate) : new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
            price: 0,
            history: [
                {
                    type: 'created',
                    author: 'Current User',
                    description: 'Task created',
                    timestamp: new Date(),
                    details: `Task "${this.formData.title}" was created`
                }
            ]
        };

        this.allTasks.push(newTask);

        console.log('=== New Task Created ===');
        console.log(`Task ID: ${newTask.id}`);
        console.log(`Task Title: ${newTask.title}`);
        console.log(`Priority: ${newTask.priority}`);
        console.log(`Assigned To: ${newTask.assignedTo}`);
        console.log(`Status: ${newTask.status}`);
        
        if (this.formData.images.length > 0) {
            console.log(`Images Attached: ${this.formData.images.length}`);
            this.formData.images.forEach((img, idx) => {
                console.log(`  - Image ${idx + 1}: ${img.file.name}`);
            });
        }

        if (this.formData.comments.length > 0) {
            console.log(`Comments Added: ${this.formData.comments.length}`);
            this.formData.comments.forEach((comment, idx) => {
                console.log(`  - Comment ${idx + 1}: ${comment.author} - ${comment.text}`);
            });
        }

        console.log('=======================');

        this.closeModals();
    }

    /**
     * Update existing task
     */
    updateTask(): void {
        if (!this.selectedTask || !this.formData.title.trim()) {
            alert('Task title is required');
            return;
        }

        const oldData = { ...this.selectedTask };

        this.selectedTask.title = this.formData.title;
        this.selectedTask.description = this.formData.description;
        this.selectedTask.priority = this.formData.priority;
        this.selectedTask.assignedTo = this.formData.assignedTo;
        this.selectedTask.dueDate = this.formData.dueDate ? new Date(this.formData.dueDate) : new Date();
        this.selectedTask.updatedAt = new Date();

        // Add history entry
        if (!this.selectedTask.history) {
            this.selectedTask.history = [];
        }
        
        let updateDetails = 'Fields updated: ';
        let changedFields: string[] = [];
        
        if (oldData.title !== this.selectedTask.title) changedFields.push('Title');
        if (oldData.description !== this.selectedTask.description) changedFields.push('Description');
        if (oldData.priority !== this.selectedTask.priority) changedFields.push('Priority');
        if (oldData.assignedTo !== this.selectedTask.assignedTo) changedFields.push('Assigned To');
        
        this.selectedTask.history.push({
            type: 'updated',
            author: 'Current User',
            description: 'Task information updated',
            timestamp: new Date(),
            details: updateDetails + changedFields.join(', ')
        });

        console.log('=== Task Updated ===');
        console.log(`Task ID: ${this.selectedTask.id}`);
        console.log(`Old Title: ${oldData.title}`);
        console.log(`New Title: ${this.selectedTask.title}`);
        console.log(`Old Priority: ${oldData.priority}`);
        console.log(`New Priority: ${this.selectedTask.priority}`);
        console.log(`Updated At: ${this.selectedTask.updatedAt.toLocaleString()}`);

        if (this.formData.images.length > 0) {
            console.log(`Images Attached: ${this.formData.images.length}`);
            this.formData.images.forEach((img, idx) => {
                console.log(`  - Image ${idx + 1}: ${img.file.name}`);
            });
        }

        if (this.formData.comments.length > 0) {
            console.log(`Comments: ${this.formData.comments.length}`);
            this.formData.comments.forEach((comment, idx) => {
                console.log(`  - Comment ${idx + 1}: ${comment.author} - ${comment.text}`);
            });
        }

        console.log('====================');

        this.closeModals();
    }

    /**
     * Delete task
     */
    deleteTask(): void {
        if (!this.selectedTask) return;

        const index = this.allTasks.findIndex(t => t.id === this.selectedTask!.id);
        if (index > -1) {
            const deletedTask = this.allTasks[index];
            
            // Add deletion history entry before removing (for audit trail)
            if (!deletedTask.history) {
                deletedTask.history = [];
            }
            deletedTask.history.push({
                type: 'deleted',
                author: 'Current User',
                description: 'Task deleted',
                timestamp: new Date(),
                details: `Task "${deletedTask.title}" was deleted`
            });
            
            this.allTasks.splice(index, 1);

            console.log('=== Task Deleted ===');
            console.log(`Task ID: ${deletedTask.id}`);
            console.log(`Task Title: ${deletedTask.title}`);
            console.log(`Status: ${deletedTask.status}`);
            console.log(`Deleted At: ${new Date().toLocaleString()}`);
            console.log('===================');
        }

        this.closeModals();
    }

    /**
     * Get timeline icon based on type
     */
    getTimelineIcon(type: string): string {
        const iconMap: {[key: string]: string} = {
            'created': 'fa-solid fa-plus',
            'status_changed': 'fa-solid fa-arrows-rotate',
            'updated': 'fa-solid fa-pen',
            'comment': 'fa-solid fa-comment',
            'image_added': 'fa-solid fa-image',
            'assigned': 'fa-solid fa-user-plus',
            'deleted': 'fa-solid fa-trash'
        };
        return iconMap[type] || 'fa-solid fa-history';
    }
}