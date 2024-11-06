import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor() {}

  getAllSkills() {
    return {
      professional__Skills: [
        { Image: 'assets/tools logo/0-angular.svg', Name: 'Angular' },
        { Image: 'assets/tools logo/react.png', Name: 'React' },
        { Image: 'assets/tools logo/NET_Core_Logo.svg.png', Name: '.Net' },
        { Image: 'assets/tools logo/csharp.png', Name: 'C#' },
        { Image: 'assets/tools logo/sql.png', Name: 'SQL' },
        { Image: 'assets/tools logo/tailwind.png', Name: 'Tailwind' },
        { Image: 'assets/tools logo/1-html5.svg', Name: 'HTML5' },
        { Image: 'assets/tools logo/2-css3.svg', Name: 'CSS3' },
        { Image: 'assets/tools logo/3-bootstrap.svg', Name: 'Bootstrap' },
        { Image: 'assets/tools logo/4-sass.svg', Name: 'SASS' },
        { Image: 'assets/tools logo/5-jquery.svg', Name: 'jQuery' },
        { Image: 'assets/tools logo/6-javascript.svg', Name: 'Javascript' },
        { Image: 'assets/tools logo/7-typescript.svg', Name: 'TypeScript' },
        { Image: 'assets/tools logo/8-firebase.svg', Name: 'Firebase' },
      ],
      Tools: [
        { Image: 'assets/tools logo/vscode.svg', Name: 'VS Code' },
        { Image: 'assets/tools logo/visual.png', Name: 'VS community' },
        { Image: 'assets/tools logo/git.svg', Name: 'Git' },
        { Image: 'assets/tools logo/github.svg', Name: 'Git Hub' },
        { Image: 'assets/tools logo/notion.svg', Name: 'Notion' },
        { Image: 'assets/tools logo/npm.svg', Name: 'NPM' },
        { Image: 'assets/tools logo/postman.svg', Name: 'Post Man' },
        { Image: 'assets/tools logo/figma.svg', Name: 'Figma' },
      ],
    };
  }
}
