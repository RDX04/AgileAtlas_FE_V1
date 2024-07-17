import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ShortcutInput } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shortcuts: ShortcutInput[] = [];
  isSidebarOpen: boolean = false;

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor() { }

  ngOnInit(): void {
    this.isSidebarOpen = this.prevSate;
    this.applyDarkMode();
  }

  togglePrevState() {
    this.isSidebarOpen = !this.isSidebarOpen;
    localStorage.setItem('sidebar_drawer', this.isSidebarOpen ? 'open' : 'close');
  }

  get prevSate(): boolean {
    return localStorage.getItem('sidebar_drawer') === 'open';
  }

  toggleDarkMode() {
    const isDarkTheme = localStorage.getItem('th') === 'dark';
    document.body.classList.toggle('darkMode', !isDarkTheme);
    localStorage.setItem('th', !isDarkTheme ? 'dark' : 'normal');
  }

  applyDarkMode() {
    const isDarkTheme = localStorage.getItem('th') === 'dark';
    if (isDarkTheme) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }

  onDrawerToggled(isOpened: boolean) {
    this.isSidebarOpen = isOpened;
  }

  logout() {
    // Implement logout logic here
    // For example: this.auth.logout();
  }
}
