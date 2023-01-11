import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../model/credentials.model';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = new Credentials();
  public passwordHide: boolean = true;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.credentials).subscribe(res => {
      this.router.navigate(['/']);
    },
    error => this.snackBar.open("Wrong username and/or password!", "Ok"));
  }
}
