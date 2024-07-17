import { Component, OnInit } from '@angular/core';
import { ShortcutInput } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shortcuts: ShortcutInput[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  togglePrevState() {
    // var openF: boolean = this.prevSate;
    // localStorageService.set('sidebar_drawer', !openF ? 'open' : 'close');
}
// get prevSate(): boolean {
//         return localStorageService.get('sidebar_drawer') == 'open';
//     }
  toggleDarkMode() {
    // var darkThm: boolean = localStorageService.get('th') == 'dark';
    // document.body.classList.toggle('darkMode');
    // localStorageService.set('th', !darkThm ? 'dark' : 'normal');
}
logout() {
  // this.auth.logout();
}

}
