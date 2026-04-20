export interface Project {
  id: number;
  name: string;
  status: 'active' | 'completed' | 'pending';
  startDate: Date;
  endDate?: Date;
  budget: number;
  spent: number;
  category: 'design' | 'development' | 'marketing' | 'branding' | 'other';
}

export interface ClientHistory {
  id: number;
  type: 'project' | 'payment' | 'invoice' | 'note' | 'contact';
  title: string;
  description: string;
  category?: string;
  amount?: number;
  timestamp: Date;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  status: 'active' | 'inactive' | 'suspended';
  joinDate: Date;
  totalBudget: number;
  totalSpent: number;
  totalRemaining: number;
  projects: Project[];
  history: ClientHistory[];
  paymentStatus: 'paid' | 'pending' | 'overdue';
  notes?: string;
  contactPerson?: string;
  website?: string;
  taxId?: string;
}

export const CLIENTS: Client[] = [
  {
    id: 1,
    name: 'Tech Solutions Inc',
    email: 'contact@techsolutions.com',
    phone: '+966-12-3456789',
    company: 'Tech Solutions Inc',
    address: 'King Fahd Road, Suite 100',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    postalCode: '11461',
    status: 'active',
    joinDate: new Date('2025-06-15'),
    totalBudget: 150000,
    totalSpent: 95000,
    totalRemaining: 55000,
    paymentStatus: 'paid',
    contactPerson: 'Ali Mohammed',
    website: 'www.techsolutions.sa',
    taxId: 'SA-1234567890',
    projects: [
      {
        id: 1,
        name: 'Website Redesign',
        status: 'completed',
        startDate: new Date('2025-06-20'),
        endDate: new Date('2025-09-15'),
        budget: 50000,
        spent: 50000,
        category: 'design'
      },
      {
        id: 2,
        name: 'Mobile App Development',
        status: 'active',
        startDate: new Date('2025-09-20'),
        budget: 80000,
        spent: 45000,
        category: 'development'
      },
      {
        id: 3,
        name: 'Brand Identity Design',
        status: 'completed',
        startDate: new Date('2025-07-01'),
        endDate: new Date('2025-08-10'),
        budget: 20000,
        spent: 20000,
        category: 'branding'
      }
    ],
    history: [
      {
        id: 1,
        type: 'project',
        title: 'Website Redesign Completed',
        description: 'Successfully completed website redesign with modern UI/UX',
        category: 'design',
        amount: 50000,
        timestamp: new Date('2025-09-15')
      },
      {
        id: 2,
        type: 'invoice',
        title: 'Invoice #001 - Website Redesign',
        description: 'Invoice for completed website redesign project',
        amount: 50000,
        timestamp: new Date('2025-09-16')
      },
      {
        id: 3,
        type: 'payment',
        title: 'Payment Received',
        description: 'Client made full payment for website redesign',
        amount: 50000,
        timestamp: new Date('2025-09-20')
      },
      {
        id: 4,
        type: 'project',
        title: 'Mobile App Development Started',
        description: 'Mobile app development project kickoff meeting',
        category: 'development',
        amount: 80000,
        timestamp: new Date('2025-09-20')
      },
      {
        id: 5,
        type: 'note',
        title: 'Project Progress Update',
        description: 'Mobile app development is 50% complete',
        timestamp: new Date('2026-01-15')
      }
    ]
  },
  {
    id: 2,
    name: 'Creative Media Group',
    email: 'info@creativemedia.sa',
    phone: '+966-14-5678901',
    company: 'Creative Media Group',
    address: 'Olaya Street, Tower A',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    postalCode: '11471',
    status: 'active',
    joinDate: new Date('2025-08-20'),
    totalBudget: 100000,
    totalSpent: 35000,
    totalRemaining: 65000,
    paymentStatus: 'pending',
    contactPerson: 'Fatima Al-Saud',
    website: 'www.creativemedia.sa',
    taxId: 'SA-9876543210',
    projects: [
      {
        id: 4,
        name: 'Logo & Brand Guidelines',
        status: 'completed',
        startDate: new Date('2025-08-25'),
        endDate: new Date('2025-10-10'),
        budget: 25000,
        spent: 25000,
        category: 'branding'
      },
      {
        id: 5,
        name: 'Social Media Campaign Design',
        status: 'active',
        startDate: new Date('2025-10-15'),
        budget: 40000,
        spent: 10000,
        category: 'marketing'
      },
      {
        id: 6,
        name: 'Corporate Video Production',
        status: 'pending',
        startDate: new Date('2026-02-01'),
        budget: 35000,
        spent: 0,
        category: 'other'
      }
    ],
    history: [
      {
        id: 6,
        type: 'project',
        title: 'Logo & Brand Guidelines Complete',
        description: 'Delivered comprehensive brand guidelines document',
        category: 'branding',
        amount: 25000,
        timestamp: new Date('2025-10-10')
      },
      {
        id: 7,
        type: 'payment',
        title: 'Partial Payment Received',
        description: 'Received 50% payment for branding project',
        amount: 12500,
        timestamp: new Date('2025-10-15')
      },
      {
        id: 8,
        type: 'project',
        title: 'Social Media Campaign Started',
        description: 'Began social media design campaign with 8 posts',
        category: 'marketing',
        amount: 40000,
        timestamp: new Date('2025-10-15')
      },
      {
        id: 9,
        type: 'payment',
        title: 'Payment Due',
        description: 'Invoice for branding project outstanding',
        amount: 12500,
        timestamp: new Date('2025-11-10')
      }
    ]
  },
  {
    id: 3,
    name: 'E-Commerce Plus',
    email: 'sales@ecommerceplus.com',
    phone: '+966-11-2345678',
    company: 'E-Commerce Plus',
    address: 'Business Park 3, Building C',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    postalCode: '21442',
    status: 'active',
    joinDate: new Date('2025-10-10'),
    totalBudget: 200000,
    totalSpent: 120000,
    totalRemaining: 80000,
    paymentStatus: 'paid',
    contactPerson: 'Hassan Al-Zahrani',
    website: 'www.ecommerceplus.sa',
    taxId: 'SA-5555555555',
    projects: [
      {
        id: 7,
        name: 'E-Commerce Platform Development',
        status: 'active',
        startDate: new Date('2025-10-15'),
        budget: 120000,
        spent: 80000,
        category: 'development'
      },
      {
        id: 8,
        name: 'Payment Gateway Integration',
        status: 'active',
        startDate: new Date('2025-12-01'),
        budget: 30000,
        spent: 20000,
        category: 'development'
      },
      {
        id: 9,
        name: 'UI/UX Design System',
        status: 'completed',
        startDate: new Date('2025-10-01'),
        endDate: new Date('2025-10-30'),
        budget: 40000,
        spent: 40000,
        category: 'design'
      }
    ],
    history: [
      {
        id: 10,
        type: 'project',
        title: 'E-Commerce Platform Started',
        description: 'Kickoff meeting for e-commerce platform development',
        category: 'development',
        amount: 120000,
        timestamp: new Date('2025-10-15')
      },
      {
        id: 11,
        type: 'project',
        title: 'UI/UX Design System Completed',
        description: 'Delivered comprehensive design system documentation',
        category: 'design',
        amount: 40000,
        timestamp: new Date('2025-10-30')
      },
      {
        id: 12,
        type: 'payment',
        title: 'Payment Received',
        description: 'Client paid full amount for UI/UX design system',
        amount: 40000,
        timestamp: new Date('2025-11-05')
      },
      {
        id: 13,
        type: 'project',
        title: 'Payment Gateway Integration',
        description: 'Integrated Stripe and Telr payment gateways',
        category: 'development',
        amount: 30000,
        timestamp: new Date('2025-12-01')
      }
    ]
  }
];
