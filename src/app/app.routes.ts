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
        path: 'About',
        loadComponent: () =>
          import('./core/components/pages/blank/about/about.component').then(
            (c) => c.AboutComponent
          ),
        title: 'Muhamed Hajajii - About',
      },
      {
        path: 'Experience',
        loadComponent: () =>
          import(
            './core/components/pages/blank/experience/experience.component'
          ).then((c) => c.ExperienceComponent),
        title: 'Muhamed Hajajii - Experience',
      },
      {
        path: 'Projects',
        loadComponent: () =>
          import(
            './core/components/pages/blank/projects/projects.component'
          ).then((c) => c.ProjectsComponent),
        title: 'Muhamed Hajajii - Projects',
      },
      {
        path: 'Skills',
        loadComponent: () =>
          import('./core/components/pages/blank/skills/skills.component').then(
            (c) => c.SkillsComponent
          ),
        title: 'Muhamed Hajajii - Skills',
      },
      {
        path: 'Education',
        loadComponent: () =>
          import(
            './core/components/pages/blank/education/education.component'
          ).then((c) => c.EducationComponent),
        title: 'Muhamed Hajajii - Education',
      },
      {
        path: 'Contact',
        loadComponent: () =>
          import(
            './core/components/pages/blank/contact/contact.component'
          ).then((c) => c.ContactComponent),
        title: 'Muhamed Hajajii - Contact',
      },
      {
        path: 'Blog',
        loadComponent: () =>
          import('./core/components/pages/blank/blog/blog.component').then(
            (c) => c.BlogComponent
          ),
        title: 'Muhamed Hajajii - Blog',
      },
      {
        path: 'Resume',
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
