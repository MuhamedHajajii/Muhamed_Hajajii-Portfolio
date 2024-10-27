import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}
  getAllExperiences() {
    return [
      {
        Company__Image: './assets/education/routeacademy.jpeg',
        Company__Image__Alt: 'Route Academy',
        Company__Website: 'https://www.linkedin.com/company/routeacademy/',
        Company__Name: 'Route Academy',
        Repsonsibilites: [
          'Student Support: Assisted students in enhancing their web development skills, providing tailored guidance to foster their growth and confidence in coding.',
          'Code Reviews: Conducted thorough code reviews, offering constructive feedback to help students improve code quality and best practices.',
          'Mentorship: Mentored students in essential frontend technologies, including HTML, CSS, JavaScript, and frameworks such as Angular, ensuring a solid foundation in web development principles.',
          'Workshops and Live Coding: Led engaging workshops and live coding sessions, enhancing students’ problem-solving abilities and encouraging collaborative learning experiences.',
        ],
        Start__Date: 'Sep 2024',
        End__Date: 'Present',
        Jop__Title: 'Frontend Mentor Part-Time',
        Jop__Type: 'Hybrid',
        Jop__Desc:
          'As a Frontend Mentor at Route Academy, I have the privilege of guiding and supporting over 100 students in their journey to becoming proficient web developers.',
        EndMessage:
          'Through my mentorship, I aim to inspire and empower the next generation of web developers, equipping them with the skills and knowledge necessary for success in the industry.',
      },
      {
        Company__Image: './assets/Vc Software.jpg',
        Company__Image__Alt: 'VC Software Agency',
        Company__Website: 'https://www.linkedin.com/in/muhamed-hajajii',
        Company__Name: 'VC Software Agency',
        Repsonsibilites: [
          'Angular Development: Implementing and maintaining high-performance features using Angular 17, ensuring responsiveness and efficiency across all devices.',
          'Documentation with JSDoc: Writing clear, consistent documentation using JSDoc to enhance code readability, maintainability, and ease of handoff for other developers.',
          'Team Collaboration: Participating in weekly and daily team meetings to sync progress, address blockers, and align on project goals, contributing to a collaborative and agile work environment.',
          'Git Workflow: Managing code changes through GitHub with clear, detailed commit messages and pull requests, maintaining code quality and ensuring smooth integration.',
        ],
        Start__Date: 'Mar 2024',
        End__Date: 'Present',
        Jop__Title: 'Frontend Developer Full-Time',
        Jop__Type: 'Remote',
        Jop__Desc:
          'In my current role as a Frontend Developer, I focus on building robust, scalable applications using Angular 17.',
        EndMessage:
          'This role has strengthened my Angular expertise and my ability to work effectively within a team, emphasizing documentation and collaborative development practices.',
      },
      {
        Company__Image: './assets/Hyper Solutions.jpg',
        Company__Image__Alt: 'Hyper Solutions web',
        Company__Website: 'https://www.facebook.com/Hyper.solutions0',
        Company__Name: 'Hyper Solutions',
        Repsonsibilites: [
          'Implementing Designs: Translated design files into clean, semantic HTML, CSS, and Bootstrap code, ensuring pixel-perfect accuracy and adherence to specifications.',
          'Responsive Development: Used Bootstrap to create layouts that adapt seamlessly across various devices, including desktops, tablets, and mobile screens.',
          'Code Optimization: Followed best practices in HTML and CSS to enhance performance, maintainability, and cross-browser compatibility.',
          'Collaboration with Design and Backend Teams: Worked closely with designers to understand design intent and with backend developers to integrate UI components effectively.',
        ],
        Start__Date: 'Mar 2024',
        End__Date: 'Sep 2024',
        Jop__Title: 'Frontend Developer Part-Time',
        Jop__Type: 'On-site',
        Jop__Desc:
          'As a UI Developer, I was responsible for transforming design mockups into functional, responsive, and accessible web interfaces',
        EndMessage:
          'This role strengthened my skills in frontend development and precision in implementing designs according to established UI guidelines.',
      },
      {
        Company__Image: './assets/concreto.jpg',
        Company__Image__Alt: 'Concoret for ReadyMix',
        Company__Website: 'https://www.concretorm.com/',
        Company__Name: 'Concoret ReadyMix',
        Repsonsibilites: [
          'Employee Relations: Facilitated communication between management and employees to foster a positive work environment and address workforce needs effectively.',
          'Recruitment and Onboarding: Managed recruitment efforts and oversaw the onboarding process for new employees, ensuring alignment with company culture and standards.',
          'Policy Implementation: Communicated HR policies related to compensation, benefits, and workplace safety, ensuring compliance across all assigned stations.',
          'Data Management and Reporting: Maintained accurate employee records, tracked attendance, and prepared HR reports to support strategic decision-making.',
        ],
        Start__Date: 'Aug 2022',
        End__Date: 'Aug 2023',
        Jop__Title: 'Human Resources Supervisor Full-Time',
        Jop__Type: 'On-site',
        Jop__Desc:
          'As an HR Supervisor, I oversaw HR administration for four concrete stations within the company, supporting a workforce of 300 employees.',
        EndMessage:
          'Working with four stations allowed me to develop strong organizational and leadership skills, essential for managing HR processes across multiple locations.',
      },
      {
        Company__Image: './assets/borgmix.jpg',
        Company__Image__Alt: 'BorgMix for ReadyMix',
        Company__Website: 'https://www.facebook.com/borgmix.eg',
        Company__Name: 'BorgMix for ReadyMix',
        Repsonsibilites: [
          'Invoice Processing and Verification: Assembled, reviewed, and verified invoices and check requests, flagging any unusual items or discrepancies for prompt clarification',
          'Expense Management: Tracked expenses, processed expense reports, and maintained accurate records for efficient budget oversight and compliance.',
          'Account Analysis: Prepared account analyses, providing data-driven insights that aid in financial planning and budgeting.',
          'Reporting: Produced monthly financial reports to provide clear snapshots of the company’s financial standing, facilitating informed decision-making.',
          'Month-End Closing: Assisted in month-end closing procedures to ensure timely and accurate financial reporting.',
          'Historical Record Maintenance: Maintained organized historical records, supporting both financial audits and ongoing financial strategy.',
        ],
        Start__Date: 'Jan 2021',
        End__Date: 'Aug 2022',
        Jop__Title: 'General Accountant Full-Time',
        Jop__Type: 'On-site',
        Jop__Desc:
          'As a General Accountant, I handle comprehensive accounting duties to ensure accurate financial records and support the company’s financial health.',
        EndMessage:
          'This role has strengthened my analytical skills and my attention to detail, enabling me to support both daily operations and long-term financial planning effectively.',
      },
      {
        Company__Image: './assets/silvertown.jpg',
        Company__Image__Alt: 'Silver Town company',
        Company__Website: 'https://silvertown-eg.com/en',
        Company__Name: 'Silver Town',
        Repsonsibilites: [
          'Customer Assistance: Help customers locate items in the store, ensuring a positive shopping experience and promoting customer loyalty.',
          "Inventory Management: Checked stock levels at other branches and facilitated orders for requested items, ensuring availability for our customers' needs.",
          'Product Knowledge: Provided detailed information about products, assisting customers in making informed purchasing decisions.',
          'Complaint Resolution: Elevated customer complaints to management, ensuring timely and effective resolution while maintaining a focus on customer satisfaction.',
          'Client Negotiation: Engaged with clients to negotiate terms and address specific requests, fostering strong relationships and enhancing sales opportunities.',
        ],
        Start__Date: 'Mar 2024',
        End__Date: 'Sep 2024',
        Jop__Title: 'ASSISTANT MANGER Part-Time',
        Jop__Type: 'On-site',
        Jop__Desc:
          'As an Assistant Manager at Silver Company, I play a pivotal role in enhancing customer satisfaction and supporting store operations.',
        EndMessage:
          'In this role, I have developed strong interpersonal and problem-solving skills, contributing to a dynamic team environment and supporting the overall success of the store.',
      },
    ];
  }
}
