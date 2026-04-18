export interface Task {
    id: number;
    title: string;
    description?: string;
    status: 'pending' | 'in_progress' | 'completed';
    priority?: 'low' | 'medium' | 'high';
    dueDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    assignedTo?: string;
    price: string,
}

export const TASKS = [
    {
        id: 1,
        title: 'Design Login Page',
        description: 'Create responsive login UI with validation',
        status: 'pending',
        priority: 'high',
        dueDate: new Date('2026-02-28T12:00:00'),
        createdAt: new Date('2026-02-20T09:00:00'),
        updatedAt: new Date('2026-02-20T09:00:00'),
        assignedTo: 'Mohamed Reda', 
        price: 0
    },
    {
        id: 2,
        title: 'Implement Authentication API',
        description: 'Connect frontend with backend login endpoint',
        status: 'in_progress',
        priority: 'high',
        dueDate: new Date('2026-03-02T15:00:00'),
        createdAt: new Date('2026-02-18T10:30:00'),
        updatedAt: new Date('2026-02-22T14:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 3,
        title: 'Fix Dashboard Bugs',
        description: 'Resolve UI alignment and filtering issues',
        status: 'completed',
        priority: 'medium',
        dueDate: new Date('2026-02-21T17:00:00'),
        createdAt: new Date('2026-02-15T08:00:00'),
        updatedAt: new Date('2026-02-21T16:45:00'),
        assignedTo: 'Sara fawzy',
        price: 0

    },
    {
        id: 4,
        title: 'Write Unit Tests',
        description: 'Add unit tests for task service',
        status: 'pending',
        priority: 'low',
        dueDate: new Date('2026-03-05T11:00:00'),
        createdAt: new Date('2026-02-22T13:00:00'),
        updatedAt: new Date('2026-02-22T13:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0

    },
    {
        id: 5,
        title: 'Deploy to Staging',
        description: 'Prepare build and deploy to staging environment',
        status: 'in_progress',
        priority: 'medium',
        dueDate: new Date('2026-03-01T18:00:00'),
        createdAt: new Date('2026-02-19T12:00:00'),
        updatedAt: new Date('2026-02-23T09:30:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    }
];