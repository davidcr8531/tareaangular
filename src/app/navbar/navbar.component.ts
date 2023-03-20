import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const openMenu: any = document.querySelector('#open-menu');
    const ul: any = document.querySelector('nav > ul');
    const closeMenu: any = document.querySelector('#close-menu');

    openMenu.addEventListener("click", () => {
      ul.classList.toggle("show");
      closeMenu.style.display = "block";
      openMenu.style.display = "none";
    });

    closeMenu.addEventListener("click", () => {
      closeMenu.style.display = "none";
      openMenu.style.display = "block";
      ul.classList.toggle("show");
    });
  }
}
