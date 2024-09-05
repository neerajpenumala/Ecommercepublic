import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modalTitle: string = '';  // Title for the modal
  currentView: 'login' | 'register' = 'login'; // Track the current view ('login' or 'register')

  // Method to open the modal and set its content (either login or register)
  openModal(view: 'login' | 'register') {
    this.currentView = view;
    this.modalTitle = view === 'login' ? 'Login' : 'Register';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
