import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flipdeals',
  templateUrl: './flipdeals.component.html',
  styleUrls: ['./flipdeals.component.css']
})
export class FlipdealsComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) { }

  logOut() {
    this.auth.logout();
    this.route.navigate(['']);
}


  ngOnInit(): void {
  }
  all:any=(alldeals as any).default;
}


