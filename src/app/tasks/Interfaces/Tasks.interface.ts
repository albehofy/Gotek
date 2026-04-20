export interface Task {
    id: number;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'in_review' | 'blocked' | 'closed' | 'rejected' | 'reopened' | 'completed';
    priority?: 'low' | 'medium' | 'high';
    dueDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    assignedTo?: string;
    price: number;
    history?: {
        type: string;
        author: string;
        description: string;
        timestamp: Date;
        details?: string;
    }[];
}

export const TASKS = [
    // Open Tasks (7 cards)
    {
        id: 1,
        title: 'Design Login Page',
        description: 'Create responsive login UI with validation',
        status: 'open',
        priority: 'high',
        dueDate: new Date('2026-02-28T12:00:00'),
        createdAt: new Date('2026-02-20T09:00:00'),
        updatedAt: new Date('2026-02-20T09:00:00'),
        assignedTo: 'Mohamed Reda', 
        price: 0
    },
    {
        id: 2,
        title: 'Setup Database',
        description: 'Configure PostgreSQL and create initial schemas',
        status: 'open',
        priority: 'high',
        dueDate: new Date('2026-03-01T10:00:00'),
        createdAt: new Date('2026-02-20T09:00:00'),
        updatedAt: new Date('2026-02-20T09:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 3,
        title: 'Create User Dashboard',
        description: 'Design and implement user dashboard component',
        status: 'open',
        priority: 'medium',
        dueDate: new Date('2026-03-05T14:00:00'),
        createdAt: new Date('2026-02-21T08:30:00'),
        updatedAt: new Date('2026-02-21T08:30:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 4,
        title: 'API Documentation',
        description: 'Write comprehensive REST API documentation',
        status: 'open',
        priority: 'medium',
        dueDate: new Date('2026-03-10T16:00:00'),
        createdAt: new Date('2026-02-22T10:00:00'),
        updatedAt: new Date('2026-02-22T10:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 5,
        title: 'Mobile App Prototype',
        description: 'Create mobile app prototype using Flutter',
        status: 'open',
        priority: 'low',
        dueDate: new Date('2026-03-15T09:00:00'),
        createdAt: new Date('2026-02-19T11:00:00'),
        updatedAt: new Date('2026-02-19T11:00:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 6,
        title: 'Email Integration',
        description: 'Integrate email service for notifications',
        status: 'open',
        priority: 'high',
        dueDate: new Date('2026-03-03T13:00:00'),
        createdAt: new Date('2026-02-23T09:00:00'),
        updatedAt: new Date('2026-02-23T09:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 7,
        title: 'Setup CI/CD Pipeline',
        description: 'Configure GitHub Actions for automated testing and deployment',
        status: 'open',
        priority: 'high',
        dueDate: new Date('2026-03-07T15:30:00'),
        createdAt: new Date('2026-02-24T10:00:00'),
        updatedAt: new Date('2026-02-24T10:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },

    // In Progress Tasks (7 cards)
    {
        id: 8,
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
        id: 9,
        title: 'Build User Profile Component',
        description: 'Create user profile management features',
        status: 'in_progress',
        priority: 'medium',
        dueDate: new Date('2026-03-04T11:00:00'),
        createdAt: new Date('2026-02-20T09:00:00'),
        updatedAt: new Date('2026-02-25T14:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 10,
        title: 'Implement Payment Gateway',
        description: 'Integrate Stripe payment processing',
        status: 'in_progress',
        priority: 'high',
        dueDate: new Date('2026-03-08T17:00:00'),
        createdAt: new Date('2026-02-21T12:00:00'),
        updatedAt: new Date('2026-02-25T10:30:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 11,
        title: 'Database Migration',
        description: 'Migrate existing data to new schema',
        status: 'in_progress',
        priority: 'high',
        dueDate: new Date('2026-03-06T18:00:00'),
        createdAt: new Date('2026-02-22T08:00:00'),
        updatedAt: new Date('2026-02-25T13:45:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 12,
        title: 'Performance Optimization',
        description: 'Optimize database queries and API responses',
        status: 'in_progress',
        priority: 'medium',
        dueDate: new Date('2026-03-12T14:00:00'),
        createdAt: new Date('2026-02-23T09:00:00'),
        updatedAt: new Date('2026-02-25T11:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 13,
        title: 'Security Audit',
        description: 'Perform security audit and fix vulnerabilities',
        status: 'in_progress',
        priority: 'high',
        dueDate: new Date('2026-03-09T16:00:00'),
        createdAt: new Date('2026-02-24T10:00:00'),
        updatedAt: new Date('2026-02-25T09:30:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 14,
        title: 'Analytics Dashboard',
        description: 'Create analytics and reporting dashboard',
        status: 'in_progress',
        priority: 'medium',
        dueDate: new Date('2026-03-11T15:30:00'),
        createdAt: new Date('2026-02-25T08:00:00'),
        updatedAt: new Date('2026-02-25T13:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },

    // In Review Tasks (7 cards)
    {
        id: 15,
        title: 'Code Review - Authentication Module',
        description: 'Review authentication module implementation',
        status: 'in_review',
        priority: 'high',
        dueDate: new Date('2026-02-26T10:00:00'),
        createdAt: new Date('2026-02-24T14:00:00'),
        updatedAt: new Date('2026-02-25T09:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 16,
        title: 'Design Review - UI Components',
        description: 'Review UI component design and implementation',
        status: 'in_review',
        priority: 'medium',
        dueDate: new Date('2026-02-27T11:00:00'),
        createdAt: new Date('2026-02-24T15:00:00'),
        updatedAt: new Date('2026-02-25T10:00:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 17,
        title: 'QA Testing - Payment Flow',
        description: 'QA review of payment processing flow',
        status: 'in_review',
        priority: 'high',
        dueDate: new Date('2026-02-28T12:00:00'),
        createdAt: new Date('2026-02-24T16:00:00'),
        updatedAt: new Date('2026-02-25T11:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 18,
        title: 'API Documentation Review',
        description: 'Review and approve API documentation',
        status: 'in_review',
        priority: 'medium',
        dueDate: new Date('2026-03-01T09:00:00'),
        createdAt: new Date('2026-02-24T17:00:00'),
        updatedAt: new Date('2026-02-25T12:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 19,
        title: 'Security Review - Data Encryption',
        description: 'Review data encryption and security measures',
        status: 'in_review',
        priority: 'high',
        dueDate: new Date('2026-02-27T14:00:00'),
        createdAt: new Date('2026-02-25T08:00:00'),
        updatedAt: new Date('2026-02-25T13:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 20,
        title: 'Performance Review - Cache Implementation',
        description: 'Review caching strategy and implementation',
        status: 'in_review',
        priority: 'medium',
        dueDate: new Date('2026-03-02T15:00:00'),
        createdAt: new Date('2026-02-25T09:00:00'),
        updatedAt: new Date('2026-02-25T14:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 21,
        title: 'Feature Review - User Notifications',
        description: 'Review user notification system implementation',
        status: 'in_review',
        priority: 'medium',
        dueDate: new Date('2026-03-01T16:00:00'),
        createdAt: new Date('2026-02-25T10:00:00'),
        updatedAt: new Date('2026-02-25T15:00:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },

    // Blocked Tasks (7 cards)
    {
        id: 22,
        title: 'Third-party API Integration',
        description: 'Waiting for API credentials from vendor',
        status: 'blocked',
        priority: 'high',
        dueDate: new Date('2026-03-15T10:00:00'),
        createdAt: new Date('2026-02-20T10:00:00'),
        updatedAt: new Date('2026-02-25T09:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 23,
        title: 'Database Migration',
        description: 'Blocked by server maintenance window',
        status: 'blocked',
        priority: 'high',
        dueDate: new Date('2026-03-10T14:00:00'),
        createdAt: new Date('2026-02-21T11:00:00'),
        updatedAt: new Date('2026-02-25T10:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 24,
        title: 'Infrastructure Setup',
        description: 'Waiting for cloud resources provisioning',
        status: 'blocked',
        priority: 'high',
        dueDate: new Date('2026-03-12T11:00:00'),
        createdAt: new Date('2026-02-22T09:00:00'),
        updatedAt: new Date('2026-02-25T11:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 25,
        title: 'Legal Compliance Review',
        description: 'Blocked pending legal team approval',
        status: 'blocked',
        priority: 'high',
        dueDate: new Date('2026-03-20T09:00:00'),
        createdAt: new Date('2026-02-23T10:00:00'),
        updatedAt: new Date('2026-02-25T12:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 26,
        title: 'Vendor Approval Required',
        description: 'Waiting for vendor contract approval',
        status: 'blocked',
        priority: 'medium',
        dueDate: new Date('2026-03-25T14:00:00'),
        createdAt: new Date('2026-02-24T10:00:00'),
        updatedAt: new Date('2026-02-25T13:00:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 27,
        title: 'Budget Allocation',
        description: 'Blocked pending budget approval',
        status: 'blocked',
        priority: 'medium',
        dueDate: new Date('2026-03-30T15:00:00'),
        createdAt: new Date('2026-02-24T11:00:00'),
        updatedAt: new Date('2026-02-25T14:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 28,
        title: 'Resource Allocation',
        description: 'Waiting for team resource allocation',
        status: 'blocked',
        priority: 'medium',
        dueDate: new Date('2026-03-18T16:00:00'),
        createdAt: new Date('2026-02-25T09:00:00'),
        updatedAt: new Date('2026-02-25T15:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },

    // Closed Tasks (7 cards)
    {
        id: 29,
        title: 'Fix Dashboard Bugs',
        description: 'Resolve UI alignment and filtering issues',
        status: 'closed',
        priority: 'medium',
        dueDate: new Date('2026-02-21T17:00:00'),
        createdAt: new Date('2026-02-15T08:00:00'),
        updatedAt: new Date('2026-02-21T16:45:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 30,
        title: 'Write Unit Tests',
        description: 'Add unit tests for task service',
        status: 'closed',
        priority: 'medium',
        dueDate: new Date('2026-02-24T11:00:00'),
        createdAt: new Date('2026-02-18T13:00:00'),
        updatedAt: new Date('2026-02-24T10:45:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 31,
        title: 'Deploy to Staging',
        description: 'Prepare build and deploy to staging environment',
        status: 'closed',
        priority: 'high',
        dueDate: new Date('2026-02-25T18:00:00'),
        createdAt: new Date('2026-02-19T12:00:00'),
        updatedAt: new Date('2026-02-25T17:30:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 32,
        title: 'Integrate Search Feature',
        description: 'Implement search functionality with filters',
        status: 'closed',
        priority: 'medium',
        dueDate: new Date('2026-02-23T14:00:00'),
        createdAt: new Date('2026-02-16T10:00:00'),
        updatedAt: new Date('2026-02-23T13:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 33,
        title: 'Update Dependencies',
        description: 'Update all npm packages to latest versions',
        status: 'closed',
        priority: 'low',
        dueDate: new Date('2026-02-22T15:00:00'),
        createdAt: new Date('2026-02-17T09:00:00'),
        updatedAt: new Date('2026-02-22T14:30:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 34,
        title: 'Create User Guide',
        description: 'Write comprehensive user documentation',
        status: 'closed',
        priority: 'low',
        dueDate: new Date('2026-02-24T16:00:00'),
        createdAt: new Date('2026-02-19T11:00:00'),
        updatedAt: new Date('2026-02-24T15:45:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 35,
        title: 'Setup Monitoring',
        description: 'Configure application monitoring and alerts',
        status: 'closed',
        priority: 'high',
        dueDate: new Date('2026-02-25T12:00:00'),
        createdAt: new Date('2026-02-20T08:00:00'),
        updatedAt: new Date('2026-02-25T11:30:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },

    // Rejected Tasks (7 cards)
    {
        id: 36,
        title: 'Implement Custom Theme',
        description: 'Rejected due to design guidelines mismatch',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-02-28T10:00:00'),
        createdAt: new Date('2026-02-20T10:00:00'),
        updatedAt: new Date('2026-02-25T09:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 37,
        title: 'Add Legacy Support',
        description: 'Rejected - out of scope for current release',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-03-05T11:00:00'),
        createdAt: new Date('2026-02-21T12:00:00'),
        updatedAt: new Date('2026-02-25T10:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 38,
        title: 'Implement Flash Notifications',
        description: 'Rejected in favor of toast notifications',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-03-01T09:00:00'),
        createdAt: new Date('2026-02-22T08:00:00'),
        updatedAt: new Date('2026-02-25T11:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 39,
        title: 'Support IE11',
        description: 'Rejected - IE11 support discontinued',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-03-10T14:00:00'),
        createdAt: new Date('2026-02-23T10:00:00'),
        updatedAt: new Date('2026-02-25T12:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 40,
        title: 'Implement Deprecated Feature',
        description: 'Rejected - feature is being phased out',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-03-15T15:00:00'),
        createdAt: new Date('2026-02-24T09:00:00'),
        updatedAt: new Date('2026-02-25T13:00:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 41,
        title: 'Add Expensive Feature',
        description: 'Rejected due to cost-benefit analysis',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-03-20T16:00:00'),
        createdAt: new Date('2026-02-24T11:00:00'),
        updatedAt: new Date('2026-02-25T14:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 42,
        title: 'Implement Redundant System',
        description: 'Rejected - conflicts with current architecture',
        status: 'rejected',
        priority: 'low',
        dueDate: new Date('2026-03-25T10:00:00'),
        createdAt: new Date('2026-02-25T08:00:00'),
        updatedAt: new Date('2026-02-25T15:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },

    // Reopened Tasks (7 cards)
    {
        id: 43,
        title: 'Fix Button Alignment Issue',
        description: 'Reopened - issue persists in production',
        status: 'reopened',
        priority: 'high',
        dueDate: new Date('2026-02-26T10:00:00'),
        createdAt: new Date('2026-02-20T09:00:00'),
        updatedAt: new Date('2026-02-25T09:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 44,
        title: 'Resolve Memory Leak',
        description: 'Reopened - issue reappeared in latest version',
        status: 'reopened',
        priority: 'high',
        dueDate: new Date('2026-02-27T11:00:00'),
        createdAt: new Date('2026-02-15T10:00:00'),
        updatedAt: new Date('2026-02-25T10:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 45,
        title: 'Fix Login Timeout Issue',
        description: 'Reopened - users still experiencing timeouts',
        status: 'reopened',
        priority: 'high',
        dueDate: new Date('2026-02-28T12:00:00'),
        createdAt: new Date('2026-02-18T08:00:00'),
        updatedAt: new Date('2026-02-25T11:00:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 46,
        title: 'Resolve Data Sync Issue',
        description: 'Reopened - sync failures reported by users',
        status: 'reopened',
        priority: 'high',
        dueDate: new Date('2026-03-01T13:00:00'),
        createdAt: new Date('2026-02-22T09:00:00'),
        updatedAt: new Date('2026-02-25T12:00:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 47,
        title: 'Fix Export Functionality',
        description: 'Reopened - exported files are corrupted',
        status: 'reopened',
        priority: 'medium',
        dueDate: new Date('2026-03-02T14:00:00'),
        createdAt: new Date('2026-02-19T10:00:00'),
        updatedAt: new Date('2026-02-25T13:00:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 48,
        title: 'Fix Notification Delivery',
        description: 'Reopened - some users not receiving notifications',
        status: 'reopened',
        priority: 'medium',
        dueDate: new Date('2026-03-03T15:00:00'),
        createdAt: new Date('2026-02-21T11:00:00'),
        updatedAt: new Date('2026-02-25T14:00:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 49,
        title: 'Fix Search Filter Bug',
        description: 'Reopened - filter not working correctly',
        status: 'reopened',
        priority: 'medium',
        dueDate: new Date('2026-03-04T16:00:00'),
        createdAt: new Date('2026-02-23T12:00:00'),
        updatedAt: new Date('2026-02-25T15:00:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },

    // Completed Tasks (7 cards)
    {
        id: 50,
        title: 'Complete Project Setup',
        description: 'Project infrastructure and initial setup completed',
        status: 'completed',
        priority: 'high',
        dueDate: new Date('2026-02-20T17:00:00'),
        createdAt: new Date('2026-02-10T09:00:00'),
        updatedAt: new Date('2026-02-20T16:30:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 51,
        title: 'Implement Basic CRUD Operations',
        description: 'All basic CRUD operations implemented',
        status: 'completed',
        priority: 'high',
        dueDate: new Date('2026-02-24T18:00:00'),
        createdAt: new Date('2026-02-15T10:00:00'),
        updatedAt: new Date('2026-02-24T17:45:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    },
    {
        id: 52,
        title: 'Setup Authentication',
        description: 'Authentication system fully implemented',
        status: 'completed',
        priority: 'high',
        dueDate: new Date('2026-02-22T19:00:00'),
        createdAt: new Date('2026-02-12T08:00:00'),
        updatedAt: new Date('2026-02-22T18:15:00'),
        assignedTo: 'Sara fawzy',
        price: 0
    },
    {
        id: 53,
        title: 'Create Base Styles',
        description: 'Base CSS framework and styles completed',
        status: 'completed',
        priority: 'medium',
        dueDate: new Date('2026-02-23T20:00:00'),
        createdAt: new Date('2026-02-14T09:00:00'),
        updatedAt: new Date('2026-02-23T19:30:00'),
        assignedTo: 'Shimaa Attia',
        price: 0
    },
    {
        id: 54,
        title: 'Setup Database Connection',
        description: 'Database connection and ORM setup completed',
        status: 'completed',
        priority: 'high',
        dueDate: new Date('2026-02-21T21:00:00'),
        createdAt: new Date('2026-02-11T10:00:00'),
        updatedAt: new Date('2026-02-21T20:45:00'),
        assignedTo: 'Abd el-hady Moustafa',
        price: 0
    },
    {
        id: 55,
        title: 'Create Navigation Component',
        description: 'Main navigation component completed',
        status: 'completed',
        priority: 'medium',
        dueDate: new Date('2026-02-25T22:00:00'),
        createdAt: new Date('2026-02-16T11:00:00'),
        updatedAt: new Date('2026-02-25T21:30:00'),
        assignedTo: 'Mohamed Reda',
        price: 0
    },
    {
        id: 56,
        title: 'Implement Error Handling',
        description: 'Global error handling system implemented',
        status: 'completed',
        priority: 'high',
        dueDate: new Date('2026-02-26T23:00:00'),
        createdAt: new Date('2026-02-13T12:00:00'),
        updatedAt: new Date('2026-02-26T22:15:00'),
        assignedTo: 'Ahmed Zeinhom',
        price: 0
    }
];