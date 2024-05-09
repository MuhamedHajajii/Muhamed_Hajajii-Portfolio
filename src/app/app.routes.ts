import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './core/components/pages/welcome-page/welcome-page.component'
      ).then((c) => c.WelcomePageComponent),
    title: 'Muhamed Hajajii - Portfolio',
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/components/pages/blank/blank.component').then(
        (c) => c.BlankComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./core/components/pages/blank/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'Muhamed Hajajii - Portfolio',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./core/components/pages/blank/about/about.component').then(
            (c) => c.AboutComponent
          ),
        title: 'Muhamed Hajajii - About',
      },
      {
        path: 'experience',
        loadComponent: () =>
          import(
            './core/components/pages/blank/experience/experience.component'
          ).then((c) => c.ExperienceComponent),
        title: 'Muhamed Hajajii - Experience',
      },
      {
        path: 'projects',
        loadComponent: () =>
          import(
            './core/components/pages/blank/projects/projects.component'
          ).then((c) => c.ProjectsComponent),
        title: 'Muhamed Hajajii - Projects',
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./core/components/pages/blank/skills/skills.component').then(
            (c) => c.SkillsComponent
          ),
        title: 'Muhamed Hajajii - Skills',
      },
      {
        path: 'education',
        loadComponent: () =>
          import(
            './core/components/pages/blank/education/education.component'
          ).then((c) => c.EducationComponent),
        title: 'Muhamed Hajajii - Education',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import(
            './core/components/pages/blank/contact/contact.component'
          ).then((c) => c.ContactComponent),
        title: 'Muhamed Hajajii - Contact',
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./core/components/pages/blank/blog/blog.component').then(
            (c) => c.BlogComponent
          ),
        title: 'Muhamed Hajajii - Blog',
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./core/components/pages/blank/resume/resume.component').then(
            (c) => c.ResumeComponent
          ),
        title: 'Muhamed Hajajii - Resume',
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./core/components/shared/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
    title: 'Muhamed Hajajii - notfound',
  },
];
