import { recentProjects } from './recentProjects';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  impact: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  highlights: string[];
  metrics: string[];
  timeline?: string;
  url?: string;
  image?: string;
  images?: string[];
  status: 'live' | 'archived' | 'ongoing';
}

const earlierProjects: Project[] = [
  {
    id: 'testfiesta',
    title: 'TestFiesta',
    subtitle: 'AI-powered test management platform',
    impact:
      'A test management tool that bends to how QA teams actually work — with an AI Copilot, versioned test history, and flat $10/user pricing.',
    problem:
      'QA teams were stuck managing tests in spreadsheets or paying per-feature for rigid SaaS tools that didn\'t integrate with their dev stack — and none of them offered intelligent assistance for actually writing test cases.',
    solution:
      'A multi-tenant SaaS platform with AI-assisted test case generation, immutable version history, bidirectional sync with GitHub, Jira, and TestRail, built-in defect tracking, and an OpenAPI-first architecture that plugs into any CI/CD pipeline — at a flat rate.',
    features: [
      'AI Copilot that generates, refines, and improves test cases from plain-text requirements',
      'Versioned test cases with full history — every edit creates a new immutable version, nothing is ever overwritten',
      'Exploratory testing sessions alongside structured test runs and test plans',
      'Built-in defect tracking with bidirectional links to test executions',
      'GitHub, Jira, and TestRail sync with incremental two-way updates and tag mapping',
      'Custom fields on cases, steps, executions, and results — adapts to any team\'s data model',
      'Multi-tenant workspaces with role-based and fine-grained resource-level permissions',
    ],
    techStack: [
      'Node.js', 'Express.js', 'TypeScript',
      'PostgreSQL', 'Knex', 'Objection.js', 'Redis',
      'AWS Bedrock', 'LangChain', 'Zod',
      'JWT', 'Passport.js', 'Google OAuth', 'OIDC', 'OpenFGA',
      'Temporal', 'BullMQ',
      'Stripe',
      'GitHub API', 'Jira Cloud API', 'TestRail API',
      'Docker', 'Kubernetes', 'Sentry',
      'Vue.js',
    ],
    highlights: [
      'Immutable versioning — each edit creates a new uid sharing a version_ref across all versions, giving teams full rollback and an audit-ready change history without extra query complexity',
      'Temporal workflow orchestration for durable multi-step operations (account provisioning, integration syncs, test run orchestration, GDPR deletion) with retry policies, tenant-scoped search attributes, and idempotency via conflict policies',
      'AWS Bedrock + LangChain with Zod schemas dynamically generated from the user\'s custom field config — an OutputFixingParser makes a corrective pass if structured output validation fails',
      'Relationship-based access control via OpenFGA — authorization as FGA tuples (user → role → resource), not baked into query logic, with batch authorization running as a single round-trip for list endpoints',
      'Per-tenant dedicated connection pools and schemas — a shared metadata database tracks app node and database server assignments; Temporal handles migrations and coordinated rolling deployments',
      'OpenAPI-first with TSOA — decorators generate the spec at build time; two versioned route trees (v1 legacy, trv2 current) let the API evolve without breaking existing integrations',
    ],
    metrics: [
      'Single platform replacing test case management, defect tracking, and multiple integration tools',
      'Versioned test history eliminates the "who changed this and when?" problem that plagues spreadsheet-based QA workflows',
      'AI Copilot reduces the time teams spend writing boilerplate test cases from requirements',
      'Predictable flat-rate pricing vs. per-seat-per-feature tiers from incumbents',
    ],
    url: 'https://www.testfiesta.com',
    timeline: '1 year (ongoing)',
    image: '/assets/testfiesta1.png',
    images: ['/assets/testfiesta1.png', '/assets/testfiesta2.png'],
    status: 'live',
  },
  {
    id: 'millennium-medical',
    title: 'Millennium Medical',
    subtitle: 'Healthcare platform for ADHD care',
    impact:
      'Automated scheduling, reminders, and refill tracking for an ADHD clinic that was running thousands of patients by hand.',
    problem:
      'An ADHD practice serving thousands of patients ran on manual processes — no automated scheduling, reminders, or medication tracking — risking missed appointments and lapsed refills.',
    solution:
      'A web app that automates the full appointment lifecycle: calendar-integrated scheduling and reminders, Zoom-based virtual consultations, a workflow engine for rescheduling, and medication adherence tracking.',
    features: [
      'Calendar-integrated automated appointment scheduling',
      'Automated follow-up and appointment reminders',
      'Zoom integration for virtual consultations with ADHD experts',
      'Workflow automation for rescheduling and cancellations',
      'Medication refill tracking and adherence monitoring',
    ],
    techStack: ['Node.js', 'TypeScript', 'NestJS'],
    highlights: [
      'Automated appointment lifecycle replacing manual scheduling',
      'Third-party calendar and Zoom integrations for virtual care',
      'Adherence tracking flags patients falling behind on refills',
      'Workflow engine built for high appointment volume',
    ],
    metrics: [
      'Eliminated manual scheduling for a practice with thousands of patients',
      'Reduced missed appointments through automated reminders',
      'Surfaced adherence issues before patients fell behind',
    ],
    timeline: '2 years (ongoing)',
    url: 'https://www.millenniummedicalassociates.com',
    image: '/assets/mma1.png',
    images: ['/assets/mma1.png', '/assets/mma2.png'],
    status: 'live',
  },
  {
    id: 'formmaker',
    title: 'Form Maker',
    subtitle: 'Form builder & data collection platform',
    impact:
      'A no-code tool for building forms, invoices, and queryable data tables — one app instead of four.',
    problem:
      'Businesses juggling multiple form-building tools needed one platform to design forms and invoices, turn collected data into queryable tables, and keep reports current automatically.',
    solution:
      'A no-code web app: design forms and invoices with a drag-and-drop GrapesJS interface, auto-build dynamic tables from CSV uploads, and schedule queries so reports stay current.',
    features: [
      'Drag-and-drop form and invoice builder powered by GrapesJS',
      'Dynamic tables generated automatically from CSV uploads',
      'Query builder to explore data in dynamic tables',
      'Scheduled queries that auto-populate reports',
      'Efficient handling of large CSV uploads',
    ],
    techStack: ['Ruby on Rails', 'GrapesJS', 'Bootstrap', 'MongoDB'],
    highlights: [
      'GrapesJS integration for intuitive template creation',
      'CSV pipeline optimized for large uploads',
      'Query engine lets non-technical users explore their data',
      'Reliable query scheduling for always-current reports',
    ],
    metrics: [
      'Replaced multiple form-building tools with one platform',
      'Eliminated manual data entry via automated CSV-to-table population',
      'Enabled non-technical users to query their own data',
    ],
    timeline: '5 months',
    image: '/assets/formmaker1.png',
    images: ['/assets/formmaker1.png', '/assets/formmaker2.png'],
    status: 'archived',
  },
  {
    id: 'fireball',
    title: 'Fireball',
    subtitle: 'Agile training game',
    impact:
      'A multiplayer game that teaches remote teams Agile by having them actually play it — ceremonies and all.',
    problem:
      'Remote teams needed to build an Agile mindset, but traditional training was passive — slide decks with no way to practice ceremonies or collaborative decisions hands-on.',
    solution:
      'A cloud-based training game where players move work items through a funnel to a "bouncer", pass balls to complete tasks, and run simulated Agile ceremonies — learning Agile by playing it.',
    features: [
      'Game elements that model core Agile concepts',
      'Funnel-and-bouncer mechanic for work item accept/reject/assign',
      'Ball-passing gameplay to collaboratively complete work items',
      'Simulated Agile ceremonies and backlog management',
      'Role-based participation for teams of up to ~17 users',
    ],
    techStack: ['React', 'Flutter', 'Firebase'],
    highlights: [
      'Real-time, multi-user gameplay with smooth synchronous interactions',
      "Rule-based engine for the bouncer's accept/reject/assign logic",
      'Cross-platform delivery (mobile + web) from a shared Firebase backend',
      'Modular element system designed to scale beyond the initial set',
    ],
    metrics: [
      'Turns passive Agile training into hands-on, collaborative gameplay',
      'Simulates real Agile ceremonies and backlog management',
      'Cross-platform reach via mobile and web apps',
    ],
    timeline: '1.5 year',
    image: '/assets/fireball1.png',
    images: ['/assets/fireball1.png', '/assets/fireball2.png'],
    status: 'archived',
  },
   {
    id: 'districtcsa',
    title: 'DistrictCSA',
    subtitle: 'Hospital equipment tracking system',
    impact:
      'Real-time tracking for 100+ hospital devices — staff find equipment about 40% faster.',
    problem:
      'Hospital departments had no real-time visibility into equipment — manual tracking caused wasted searches, double-purchasing, and unplanned downtime.',
    solution:
      'Real-time equipment tracking with Socket.io, status monitoring, intelligent allocation, and a GraphQL API — cutting equipment discovery time by 40%.',
    features: [
      'Real-time tracking dashboard with Socket.io live updates',
      'Status monitoring — available, in-use, charging, maintenance',
      'Department-based allocation and requests',
      'Maintenance schedule tracking and alerts',
      'Equipment history and audit trails',
    ],
    techStack: ['NestJS', 'GraphQL', 'Socket.io', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    highlights: [
      'Full-stack architecture from database to real-time UI',
      'Distributed real-time system via Socket.io clusters',
      'GraphQL query optimization with DataLoader batching',
      'Redis caching layer reduced DB load by ~60%',
    ],
    metrics: [
      '40% reduction in API response time',
      'Sub-second equipment status updates',
      'Eliminated phantom equipment purchases via data-driven allocation',
    ],
    timeline: '8 months',
    status: 'archived',
  },
  {
    id: 'sdash',
    title: 'SDASH',
    subtitle: 'Real estate CRM platform',
    impact:
      'A real estate CRM that moved a paper-run operation onto one system — sales, construction, tenancy, and admin.',
    problem:
      'Real estate operations ran on paper — no centralized property data, no real-time access for stakeholders, and manual workflows that slowed decisions.',
    solution:
      'A real estate CRM with dedicated modules for sales, construction, tenancy, inventory, and administration — plus client/staff portals and dynamic plot mapping.',
    features: [
      'Centralized management for sales, construction, tenancy, and admin',
      'Dynamic, visualized plot maps for property decision-making',
      'Dedicated client and staff portals with role-specific access',
      'Tenant screening, lease management, and rent collection',
      'Inventory control and land record management',
    ],
    techStack: ['React', 'NestJS', 'MySQL'],
    highlights: [
      'Modular architecture covering each stage of the real estate lifecycle',
      'Real-time stakeholder access replacing paper-based workflows',
      'Role-based portals serving clients and staff with tailored views',
      'Delivered as both a web and mobile application',
    ],
    metrics: [
      'Centralized property data across the full real estate lifecycle',
      'Real-time visibility for all stakeholders',
      'Streamlined land record management and town planning',
    ],
    timeline: '6 months',
    image: '/assets/SDASH-Mockup.png',
    images: ['/assets/sdash1.png', '/assets/sdash2.png'],
    status: 'archived',
  },
  {
    id: 'onlinedoc',
    title: 'OnlineDoc',
    subtitle: 'Collaboration suite for healthcare teams',
    impact:
      'One secure web and mobile app for doctors — tasks, patient communication, and scheduling in a single place.',
    problem:
      'Doctors were juggling separate tools for tasks, patient communication, and scheduling — and needed them unified into one secure platform with no performance trade-offs.',
    solution:
      'A web and mobile suite with a modular architecture — each feature runs as an independent service: task management, waiting-room slideshows, a shared contact book, patient calling, and a community calendar, with security built into the core.',
    features: [
      'Task management to create, assign, and track team work',
      'Interactive slideshows for waiting-room displays',
      'Centralized contact book for cross-team communication',
      'Smart patient calling directly from the platform',
      'Shared community calendar for appointments and events',
    ],
    techStack: ['React', 'NestJS', 'MySQL'],
    highlights: [
      'Modular architecture where each feature runs as an independent service',
      'Clear, documented APIs for inter-module communication',
      'Security built into the core: encryption at rest and in transit',
      'Regular penetration testing and security audits',
    ],
    metrics: [
      'Consolidated multiple clinical tools into one platform',
      'Industry-standard encryption for patient data',
      'Proactive vulnerability detection through regular pen testing',
    ],
    timeline: '10 months',
    image: '/assets/OnlineDoc-Mockup.png',
    images: [  '/assets/onlinedoc1.png','/assets/onlinedoc2.png'],
    status: 'archived',
  },
  {
    id: 'atlanta-dog-trainer',
    title: 'Atlanta Dog Trainer',
    subtitle: 'Dog training & boarding business website',
    impact:
      'A new site for a 30-year dog-training business — 400+ five-star reviews, 10,000+ dogs trained, online booking.',
    problem:
      'A 30-year dog-training business had a legacy site that failed to showcase expertise or credentials, build trust, or offer online booking.',
    solution:
      'A modern, responsive website with trainer credentials, a clear service breakdown, online booking, and social proof — positioned as a premium service.',
    features: [
      'Trainer bios with certifications and experience',
      'Clear service matrix — training type, level, and pricing',
      'Online appointment booking with calendar',
      'Before/after training galleries and testimonials',
      'Location, hours, and contact prominently displayed',
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Calendar API', 'Stripe/Square'],
    highlights: [
      'Trust signals — reviews, credentials, before/after — placed prominently',
      'Content organization enables service discovery and upsell',
      'Automated booking reduces no-shows',
      'Mobile-first design — pet owners search on phones',
    ],
    metrics: [
      '10,000+ dogs trained (lifetime)',
      '400+ 5-star Google reviews',
      'Premium positioning justifies higher service rates',
    ],
    timeline: '1 year',
    url: 'https://www.atlantadogtrainer.com',
    image: '/assets/adt1.png',
    images: ['/assets/adt1.png', '/assets/adt2.png'],
    status: 'live',
  },
];

export const projects: Project[] = [...recentProjects, ...earlierProjects];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
