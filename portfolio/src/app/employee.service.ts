import { Injectable } from '@angular/core';
import { Employee } from '../interface/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      image:
        'https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712448000&semt=ais',
      portfolio: {
        bio: 'I am a passionate software engineer with 5 years of experience...',
        projects: [
          {
            title: 'Project A',
            description: 'Developed a web application using React.js...',
            link: 'https://example.com/project-a',
          },
          {
            title: 'Project B',
            description:
              'Implemented RESTful APIs using Node.js and Express...',
            link: 'https://example.com/project-b',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Graphic Designer',
      department: 'Design',
      image:
        'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg',
      portfolio: {
        bio: 'I am a creative graphic designer specializing in branding and UI/UX design...',
        projects: [
          {
            title: 'Project X',
            description: 'Designed a new logo for a startup company...',
            link: 'https://example.com/project-x',
          },
          {
            title: 'Project Y',
            description: 'Created mockups and prototypes for a mobile app...',
            link: 'https://example.com/project-y',
          },
        ],
      },
    },
    {
      id: 3,
      name: 'David Johnson',
      position: 'Marketing Manager',
      department: 'Marketing',
      image:
        'https://t4.ftcdn.net/jpg/01/95/15/21/360_F_195152118_mJWndEwAgbd9JKUiQ31XazFWCim1yf0b.webp',
      portfolio: {
        bio: 'I am an experienced marketing manager with a focus on digital marketing strategies...',
        projects: [
          {
            title: 'Campaign A',
            description:
              'Launched a successful social media marketing campaign...',
            link: 'https://example.com/campaign-a',
          },
          {
            title: 'Campaign B',
            description:
              'Developed email marketing strategies that increased conversions...',
            link: 'https://example.com/campaign-b',
          },
        ],
      },
    },
    {
      id: 4,
      name: 'Emily Brown',
      position: 'Human Resources Specialist',
      department: 'HR',
      image:
        'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
      portfolio: {
        bio: 'I am dedicated to creating a positive and inclusive work environment...',
        projects: [
          {
            title: 'Recruitment Drive',
            description: 'Managed recruitment process for various positions...',
            link: 'https://example.com/recruitment-drive',
          },
          {
            title: 'Employee Training Program',
            description: 'Developed and implemented training programs...',
            link: 'https://example.com/training-program',
          },
        ],
      },
    },
    {
      id: 5,
      name: 'Michael Lee',
      position: 'Financial Analyst',
      department: 'Finance',
      image: 'https://imgk.timesnownews.com/story/men.gif',
      portfolio: {
        bio: 'I am a detail-oriented financial analyst with expertise in financial modeling...',
        projects: [
          {
            title: 'Financial Forecasting',
            description:
              'Developed financial models to forecast company performance...',
            link: 'https://example.com/financial-forecasting',
          },
          {
            title: 'Budget Analysis',
            description:
              'Conducted analysis to optimize company budget allocation...',
            link: 'https://example.com/budget-analysis',
          },
        ],
      },
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      position: 'Content Writer',
      department: 'Marketing',
      image:
        'https://st5.depositphotos.com/2024219/64247/i/450/depositphotos_642478896-stock-photo-young-english-woman-isolated-white.jpg',
      portfolio: {
        bio: 'I am a skilled content writer with experience in creating engaging content...',
        projects: [
          {
            title: 'Blog Series',
            description: 'Wrote a series of blog posts on industry trends...',
            link: 'https://example.com/blog-series',
          },
          {
            title: 'Whitepaper',
            description:
              'Authored a comprehensive whitepaper on a relevant topic...',
            link: 'https://example.com/whitepaper',
          },
        ],
      },
    },
    {
      id: 7,
      name: 'Alex Rodriguez',
      position: 'Sales Manager',
      department: 'Sales',
      image:
        'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774',
      portfolio: {
        bio: 'I am a results-driven sales manager with a track record of exceeding targets...',
        projects: [
          {
            title: 'Sales Campaign',
            description:
              'Led a successful sales campaign resulting in a 20% increase in revenue...',
            link: 'https://example.com/sales-campaign',
          },
          {
            title: 'Client Acquisition',
            description:
              'Acquired key clients and developed long-term relationships...',
            link: 'https://example.com/client-acquisition',
          },
        ],
      },
    },
    {
      id: 8,
      name: 'Sophia Martinez',
      position: 'UI/UX Designer',
      department: 'Design',
      image:
        'https://media.istockphoto.com/id/1175244110/photo/close-up-portrait-of-her-she-nice-attractive-lovely-cheerful-cheery-glad-girl-showing-v-sign.jpg?s=612x612&w=0&k=20&c=hPeICmgAN4yI7ieUzmv868epsdF_hhlEPvdwkZ9nRLo=',
      portfolio: {
        bio: 'I am a UI/UX designer passionate about creating intuitive and visually appealing user experiences...',
        projects: [
          {
            title: 'Mobile App Redesign',
            description:
              'Redesigned the user interface of a mobile app for improved usability...',
            link: 'https://example.com/app-redesign',
          },
          {
            title: 'Website Design',
            description:
              'Designed a responsive website with a focus on user engagement...',
            link: 'https://example.com/website-design',
          },
        ],
      },
    },
    {
      id: 9,
      name: 'Daniel Kim',
      position: 'Data Analyst',
      department: 'Analytics',
      image:
        'https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774',
      portfolio: {
        bio: 'I am a data analyst proficient in data visualization and statistical analysis...',
        projects: [
          {
            title: 'Data Dashboard',
            description:
              'Created interactive data dashboards for monitoring key metrics...',
            link: 'https://example.com/data-dashboard',
          },
          {
            title: 'Market Research',
            description:
              'Conducted market research to identify emerging trends...',
            link: 'https://example.com/market-research',
          },
        ],
      },
    },
    {
      id: 10,
      name: 'Olivia White',
      position: 'Project Manager',
      department: 'Project Management',
      image:
        'https://media.istockphoto.com/id/1383882497/photo/joyful-woman-laughing-holding-stomach-pointing-to-camera-taunting-you-cant-stop-laughter.jpg?s=612x612&w=0&k=20&c=SWGkMWly2We4edwLEFO8LSyXVl1kJzqB3Bc2oelDmc8=',
      portfolio: {
        bio: 'I am an organized project manager with experience leading cross-functional teams...',
        projects: [
          {
            title: 'Product Launch',
            description: 'Managed the successful launch of a new product...',
            link: 'https://example.com/product-launch',
          },
          {
            title: 'Project Planning',
            description: 'Developed detailed project plans and timelines...',
            link: 'https://example.com/project-planning',
          },
        ],
      },
    },
  ];

  constructor() {}

  getAllEmp(): Employee[] {
    return this.employees;
  }

  getEmpById(id: number): Employee | null {
    const found = this.employees.find((e) => e.id === id) || null;
    return found;
  }
}
