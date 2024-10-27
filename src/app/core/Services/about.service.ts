import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  getAboutDetails() {
    return {
      title:
        '- Frontend developer with a passion for UI design, collaboration, and teaching.',
      description: [
        'Frontend developer passionate about UI design, collaboration, and teaching. I love solving complex problems and expanding my skill set. I strive to create high-quality, maintainable code that meets industry standards and am always eager for new challenges to grow as a developer.',
        'I graduated with a degree in Business Administration, specializing in Finance, but my interest in software development led me to pursue a career in tech. With experience in sales, marketing, public relations, and finance, I bring a diverse skill set to the table. My curiosity drives me to constantly learn, improve, and seek out new challenges in my professional journey.',
      ],
      about: {
        Birth: 'Alexandria, Egypt',
        Address: '22-8-1999',
        Military: 'Exempted from military service',
      },
      currentFoucs: [
        {
          name: 'ASP.NET Core',
          link:"https://dotnet.microsoft.com/en-us/apps/aspnet"
        },
        {
          name: 'React',
          link:"https://react.dev/"
        },
        {
          name: 'WordPress',
          link:"https://wordpress.com/"
        },
        {
          name: 'Node js',
          link:"https://nodejs.org/en"
        },
        {
          name: 'UI UX Design',
          link:"#"
        },
      ],
      endMessage:
        'I look forward to connecting and collaborating with others in the tech space!',
    };
  }
  getMyCurrentAge() {
    let d = new Date('8-22-1999');
    let nowD = new Date();
    return nowD.getFullYear() - d.getFullYear();
  }
}
