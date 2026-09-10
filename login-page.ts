import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth';
import { TokenStorageService } from '../../services/token-storage';

export interface LoginPostData {
  id_token: string;
  id: number;
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  constructor(
    private authService: AuthServiceService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.authService.isLoggedIn = true;
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.http.post<LoginPostData>('https://localhost:7250/api/Login', {
      username,
      password
    }).subscribe((data) => {
      this.tokenStorage.saveToken(data.id_token);
      this.tokenStorage.saveUser(data.id);
      this.router.navigate([this.authService.redirectUrl]);
      window.location.reload();
    });
  }
}