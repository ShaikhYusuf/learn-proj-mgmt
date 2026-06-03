
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatListModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'economics';
  isMenuActive = false; // Initialize menu visibility
  activeTab = 'Explanation'; // Default active tab
  selectedMenuItem: any = null; // Track selected menu item for submenu display

  menuItems = [
    { name: 'Lesson 1: Concept of Administration, Management and Organization', url: 'les1', quiz: 'quiz/1', fillblank: 'fillblank/1' },
    { name: 'Lesson 2 Concept of Management with Special Reference to Education I', url: './les2', quiz: 'quiz/2', fillblank: 'fillblank/2' },
    { name: 'Lesson 3: Concept of Management with Special Reference to Education II', url: 'les3', quiz: 'quiz/3', fillblank: 'fillblank/3' },
    { name: 'Lesson 4: Concept of Management With Special Reference to Education III', url: 'les4', quiz: 'quiz/4', fillblank: 'fillblank/4' },
    { name: 'Lesson 5: Need and Objectives of Education Management', url: 'les5', quiz: 'quiz/5', fillblank: 'fillblank/5' },
    { name: 'Lesson 6: Roles of a Manager', url: 'les6', quiz: 'quiz/6', fillblank: 'fillblank/6' },
    { name: 'Lesson 7: Skills of Managers', url: 'les7', quiz: 'quiz/7', fillblank: 'fillblank/7' },
    { name: 'Lesson 8 Planning: A function of Management', url: 'les8', quiz: 'quiz/8', fillblank: 'fillblank/8' },
    { name: 'Lesson 9: Planning II', url: 'les9', quiz: 'quiz/9', fillblank: 'fillblank/9' },
    { name: 'Lesson 10: Organisation as a process', url: 'les10', quiz: 'quiz/10', fillblank: 'fillblank/10' },
    { name: 'Lesson 11: Organisation II', url: 'les11', quiz: 'quiz/11', fillblank: 'fillblank/11' },
    { name: 'Lesson 12: Organisation III', url: 'les12', quiz: 'quiz/12', fillblank: 'fillblank/12' },
    { name: 'Lesson 13: Organisation IV', url: 'les13', quiz: 'quiz/13', fillblank: 'fillblank/13' },
    { name: 'Lesson 14: Staffing I', url: 'les14', quiz: 'quiz/14', fillblank: 'fillblank/14' },
    { name: 'Lesson 15: Staffing II ', url: 'les15', quiz: 'quiz/15', fillblank: 'fillblank/15' },
    { name: 'Lesson 16: Controlling I', url: 'les16', quiz: 'quiz/16', fillblank: 'fillblank/16' },
    { name: 'Lesson 17: Controlling as a Function of Management', url: 'les17', quiz: 'quiz/17', fillblank: 'fillblank17' },
    { name: 'Lesson 18: Delegating I', url: 'les18', quiz: 'quiz/18', fillblank: 'fillblank/18' },
    { name: 'Lesson 19: Delegating II', url: 'les19', quiz: 'quiz/19', fillblank: 'fillblank/19' },
    { name: 'Lesson 20: Decision Making', url: 'les20', quiz: 'quiz/20', fillblank: 'fillblank/20' },
    { name: 'Lesson 21: Decision Making Types of Decisions', url: 'les21', quiz: 'quiz/21', fillblank: 'fillblank/21' },
    { name: 'Lesson 22: Human Resource Management', url: 'les22', quiz: 'quiz/22', fillblank: 'fillblank/22' },
    { name: 'Lesson 23: Motivation: Concept and Process', url: 'les23', quiz: 'quiz/23', fillblank: 'fillblank/23' },
    { name: 'Lesson 24: McClelland’s Theory of Motivation', url: 'les24', quiz: 'quiz/24', fillblank: 'fillblank/24' },
    { name: 'Lesson 25: Theories Of Motivation And Its Application (Herzberg)', url: 'les25', quiz: 'quiz/25', fillblank: 'fillblank/25' },
    { name: 'Lesson 26: Theories of Motivation and its Application(Vroom)', url: 'les26', quiz: 'quiz/26', fillblank: 'fillblank/26' },
    { name: 'Lesson 27: Equity Theory of motivation', url: 'les27', quiz: 'quiz/27', fillblank: 'fillblank/27' },
    { name: '28 Concept and Types of Conflict ', url: 'les28', quiz: 'quiz/28', fillblank: 'fillblank/28' },
    { name: 'Lesson 29: Conflict Management', url: 'les29', quiz: 'quiz/29', fillblank: 'fillblank/29' },
    { name: 'Lesson 30: Stress Management: Meaning, Sources and Strategies ', url: 'les30', quiz: 'quiz/30', fillblank: 'fillblank/30' },
    { name: 'Lesson 31: Stress Management: Meaning, Sources and Strategies II ', url: 'les31', quiz: 'quiz/31', fillblank: 'fillblank/31' },
    { name: 'Lesson 32: Stress Management: Meaning, Sources and Strategies III ', url: 'les32', quiz: 'quiz/32', fillblank: 'fillblank/32' },
    { name: 'Lesson 33: Time Management', url: 'les33', quiz: 'quiz/33', fillblank: 'fillblank/33' },
    { name: 'Lesson 34: Theories of Leadership – I', url: 'les34', quiz: 'quiz/34', fillblank: 'fillblank/34' },
    { name: 'Lesson 35: Theories of Leadership – II', url: 'les35', quiz: 'quiz/35', fillblank: 'fillblank/35' },
    { name: 'Lesson 36: Theories of Leadership – III', url: 'les36', quiz: 'quiz/36', fillblank: 'fillblank/36' },
    { name: 'Lesson 37: Organizational Development', url: 'les37', quiz: 'quiz/37', fillblank: 'fillblank/37' },
    { name: 'Lesson 38: Intervention Techniques for Organizational Development', url: 'les38', quiz: 'quiz/38', fillblank: 'fillblank/38' },
    { name: 'Lesson 39: Staff Development: Meaning, Objectives, Process and MethodsZ', url: 'les39', quiz: 'quiz/39', fillblank: 'fillblank/39' },
    { name: 'Lesson 40: Performance Appraisal', url: 'les40', quiz: 'quiz/40', fillblank: 'fillblank/40' },


  ];

  tabs = ['Explanation', 'Quiz', 'Fill In the Blanks'];

  constructor(private router: Router) {
    this.selectedMenuItem = this.menuItems[0];
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  selectMenuItem(item: any): void {
    this.selectedMenuItem = this.selectedMenuItem === item ? null : item;
    this.isMenuActive = false;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;

    if (this.selectedMenuItem) {
      if (this.activeTab === 'Explanation') {
        this.router.navigate([this.selectedMenuItem.url]);
      } else if (this.activeTab === 'Quiz') {
        this.router.navigate([this.selectedMenuItem.quiz]);
      } else if (this.activeTab === 'Fill In the Blanks') {
        this.router.navigate([this.selectedMenuItem.fillblank]);
      } else {
        this.router.navigate([this.selectedMenuItem.url]);
      }
    }
  }

  getRouterLink(item: any): string {
    return item.url;
  }
}
