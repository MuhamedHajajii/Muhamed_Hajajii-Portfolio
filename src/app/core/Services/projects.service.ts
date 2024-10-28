import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getAllProjects() {
    return {
      Angular17__Projects: [
        {
          Project__Name:
            'Administration Dashboard for Governmental Organization Web App',
          Project__image: './assets/freelance/tsheel.png',
          Project__Description: 'Angular 17 And PHP larvel',
          Project__Repo: '',
          Project__Demo: 'https://tasheel-ye.com/',
          Project__Technologies: ['Privet'],
        },
        {
          Project__Name: 'Online Delivery Momento Cafe',
          Project__image: './assets/freelance/momentos.png',
          Project__Description:
            'Angular 17 And Google App script (GAS) using google sheets and google drive as a Database',
          Project__Repo: 'https://github.com/MuhamedHajajii/momentocafe',
          Project__Demo: 'https://www.momentomart.com/',
          Project__Technologies: [
            'Online Delivry',
            'Menu',
            'Google Drive',
            'Google Sheets',
          ],
        },
        {
          Project__Name: 'Summit Online School',
          Project__image: './assets/freelance/summit.png',
          Project__Description:
            'Angular 17 And Google App script (GAS) using google sheets and google drive as a Database',
          Project__Repo: 'https://github.com/MuhamedHajajii/summit-site',
          Project__Demo: 'https://www.summitonlineschool.com/',
          Project__Technologies: [
            'Students Enroll',
            'Teachers Enroll',
            'comments',
            'Represent all the school details',
          ],
        },
      ],
      Angular16__Projects: [
        {
          Project__Name: 'FreshMarket',
          Project__image: './assets/FreshMarket/FreshMarket.png',
          Project__Description:
            'E-commerce Application develop with angular 16',
          Project__Repo:
            'https://github.com/MuhamedHajajii/E-commerce-website-Angular',
          Project__Demo:
            'https://e-commerce-website-angular-tau.vercel.app/login',
          Project__Technologies: [
            'Ui (display data)',
            'Authentication',
            'wishList',
            'Cart',
            'Address',
            'Make Order',
            'Brands',
            'Categories',
          ],
        },
        {
          Project__Name: 'Simple Design',
          Project__image: './assets/CookiesDesign/CookiesDesign.png',
          Project__Description: 'Simple Angular Design for routing and SPA',
          Project__Repo:
            'https://github.com/MuhamedHajajii/Start-FrameWork-angular',
          Project__Demo: 'https://start-frame-work-angular.vercel.app/',
          Project__Technologies: [
            'Angular 16',
            'TypeScript',
            'HTML5',
            'CSS3',
            'Bootstrap5',
          ],
        },
      ],

      Jquery__Projects: [
        {
          Project__Name: 'Yummy Recipes website',
          Project__image: 'assets/Yummy/Yummy.png',
          Project__Description:
            'jQuery Js Apis and validition and many other topics',
          Project__Repo:
            'https://github.com/MuhamedHajajii/Yummy-Recipes-website',
          Project__Demo:
            'https://muhamedhajajii.github.io/Yummy-Recipes-website/',
          Project__Technologies: [
            'HTML5',
            'Css3',
            'Bootstrap5',
            'JavaScript',
            'jQuery',
          ],
        },
        {
          Project__Name: 'Egyption Party',
          Project__image: 'assets/Party/Party.png',
          Project__Description:
            'simple site test jquery methods and count down for spacific date and validation for letters in textarea',
          Project__Repo: 'https://github.com/MuhamedHajajii/jQuery-site',
          Project__Demo: 'https://muhamedhajajii.github.io/jQuery-site/',
          Project__Technologies: [
            'HTML5',
            'Css3',
            'Bootstrap5',
            'JavaScript',
            'jQuery',
          ],
        },
      ],

      PureJs__Projects: [
        {
          Project__Name: 'Games Site',
          Project__image: 'assets/Games/Games.png',
          Project__Description:
            'design for game search and ads for weather application to visite with slider and drag swaper and some animation',
          Project__Repo: 'https://github.com/MuhamedHajajii/Games-Site',
          Project__Demo: 'https://muhamedhajajii.github.io/Games-Site/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Weather live',
          Project__image: 'assets/Weather/Weather.png',
          Project__Description:
            'Weather App using weather api to generate weather for any location live with search',
          Project__Repo: 'https://github.com/MuhamedHajajii/Weather-live',
          Project__Demo: 'https://muhamedhajajii.github.io/Weather-live/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Login Page',
          Project__image: 'assets/regex/regex.png',
          Project__Description:
            'Login and Signup page using Regular Expression',
          Project__Repo:
            'https://github.com/MuhamedHajajii/Login-Page-validation',
          Project__Demo:
            'https://muhamedhajajii.github.io/Login-Page-validation/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Crud System',
          Project__image: 'assets/crud/crud.png',
          Project__Description: 'Crud System with login page',
          Project__Repo:
            'https://github.com/MuhamedHajajii/Crud-System-with-login-page',
          Project__Demo:
            'https://muhamedhajajii.github.io/Crud-System-with-login-page/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Bookmarker',
          Project__image: 'assets/Bookmarker/Bookmarker.png',
          Project__Description: 'CRUD Saving links in local storage',
          Project__Repo: 'https://github.com/MuhamedHajajii/BookMarker',
          Project__Demo: 'https://muhamedhajajii.github.io/BookMarker/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Marvel World',
          Project__image: 'assets/Marvel/Marvel.png',
          Project__Description: 'Random Quote, Movies and memes Generator',
          Project__Repo:
            'https://github.com/MuhamedHajajii/Random-Quote-Generator',
          Project__Demo:
            'https://muhamedhajajii.github.io/Random-Quote-Generator/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
        {
          Project__Name: 'Quote',
          Project__image: 'assets/Quote/Quote.png',
          Project__Description: 'Random Quote Generator',
          Project__Repo:
            'https://github.com/MuhamedHajajii/Random-Quote-Generator',
          Project__Demo:
            'https://muhamedhajajii.github.io/Random-Quote-Generator/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5', 'JavaScript'],
        },
      ],

      HTMLCSS__Projects: [
        {
          Project__Name: 'DANIELS',
          Project__image: './assetsDANIELSDANIELS.png',
          Project__Description: 'Portfolio Landing page with main Animation',
          Project__Repo: 'https://github.com/MuhamedHajajii/DANIELS',
          Project__Demo: 'https://muhamedhajajii.github.io/DANIELS/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5'],
        },
        {
          Project__Name: 'DevFolio',
          Project__image: 'assets/DevFolio/DevFolio About.png',
          Project__Description: 'Portfolio Landing page with main UI Tools',
          Project__Repo: 'https://github.com/MuhamedHajajii/DevFolio',
          Project__Demo: 'https://muhamedhajajii.github.io/DevFolio/',
          Project__Technologies: ['HTML5', 'Css3', 'Bootstrap5'],
        },
        {
          Project__Name: 'Leon',
          Project__image: 'assets/leon-project/portfolio-section.png',
          Project__Description: 'Simple Landing page with main UI Tools',
          Project__Repo: 'https://github.com/MuhamedHajajii/Leon-Project',
          Project__Demo: 'https://muhamedhajajii.github.io/Leon-Project/',
          Project__Technologies: ['HTML5', 'Css3'],
        },
      ],
    };
  }
}
