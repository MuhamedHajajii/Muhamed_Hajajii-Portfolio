import { Routes } from '@angular/router';

export const routes: Routes = [
  /**
   * Routing Logic depend on one scenario ==>>
   * If The path is empty it will rout the user for the Hello Component
   * Using this approach instead of using a named component
   *  make share the website link url Easier in this way ==>> [https://www.muhamedhajajii.blog/] 
   * instead of this [https://www.muhamedhajajii.blog/home]
   */
  {
    path: '',
    loadComponent: () =>
      import(
        './core/components/pages/welcome-page/welcome-page.component'
      ).then((c) => c.WelcomePageComponent),
    title: 'Muhamed Hajajii - Portfolio',
  },
  /**
   * Wrapping all the components inside a blank component 
   * Make the navbar only appear within that component
   * instead of making unnecessary if conditions
   */
  {
    path: '',
    loadComponent: () =>
      import('./core/components/pages/blank/blank.component').then(
        (c) => c.BlankComponent
      ),
    children: [
      /** Home Component */
      {
        path: 'home',
        loadComponent: () =>
          import('./core/components/pages/blank/home/home.component').then(
            (c) => c.HomeComponent
          ),
        title: 'Muhamed Hajajii - Portfolio',
      },
      /** About Component */
      {
        path: 'about',
        loadComponent: () =>
          import('./core/components/pages/blank/about/about.component').then(
            (c) => c.AboutComponent
          ),
        title: 'Muhamed Hajajii - About',
      },
      /** Experience Component */
      {
        path: 'experience',
        loadComponent: () =>
          import(
            './core/components/pages/blank/experience/experience.component'
          ).then((c) => c.ExperienceComponent),
        title: 'Muhamed Hajajii - Experience',
      },
      /** Projects Component */
      {
        path: 'projects',
        loadComponent: () =>
          import(
            './core/components/pages/blank/projects/projects.component'
          ).then((c) => c.ProjectsComponent),
        title: 'Muhamed Hajajii - Projects',
      },
      /** Skills Component */
      {
        path: 'skills',
        loadComponent: () =>
          import('./core/components/pages/blank/skills/skills.component').then(
            (c) => c.SkillsComponent
          ),
        title: 'Muhamed Hajajii - Skills',
      },
      /** Education Component */
      {
        path: 'education',
        loadComponent: () =>
          import(
            './core/components/pages/blank/education/education.component'
          ).then((c) => c.EducationComponent),
        title: 'Muhamed Hajajii - Education',
      },
      /** Contact Component */
      {
        path: 'contact',
        loadComponent: () =>
          import(
            './core/components/pages/blank/contact/contact.component'
          ).then((c) => c.ContactComponent),
        title: 'Muhamed Hajajii - Contact',
      },
      /** Blog Component */
      {
        path: 'blog',
        loadComponent: () =>
          import('./core/components/pages/blank/blog/blog.component').then(
            (c) => c.BlogComponent
          ),
        title: 'Muhamed Hajajii - Blog',
      },
      /** Resume Component */
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

  /**
   * Not Found Component
   */
  {
    path: '**',
    loadComponent: () =>
      import('./core/components/shared/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
    title: 'Muhamed Hajajii - notfound',
  },
];
