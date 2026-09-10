import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Submitting registration:', this.form);

    this.http.post('https://localhost:7250/api/Login', this.form, {
      responseType: 'text'
    }).subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }
}