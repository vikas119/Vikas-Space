import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  contactAlert() {
    alert('Write to: vikas.singh.6257@gmail.com')
  }
}
