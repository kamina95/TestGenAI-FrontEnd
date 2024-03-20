import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ApiResponse {
  result: string;
}

@Component({
  selector: 'app-code-share',
  templateUrl: './code-share.component.html',
  styleUrls: ['./code-share.component.css']
})
export class CodeShareComponent {
  codeInput = '';
  testInput = '';
  codeOutput = '';
  isLoading = false;  // Flag to indicate loading state

  constructor(private http: HttpClient) { }

  processCode(): void {
    this.isLoading = true; // Start loading
    const apiUrl = 'http://localhost:8080/api/submit';
  
    // Set responseType to 'text' to expect a plain text response
    this.http.post(apiUrl, { code: this.codeInput, tests: this.testInput }, { responseType: 'text' })
      .subscribe(response => {
        this.codeOutput = response;
        this.isLoading = false; // Stop loading once the response is received
      }, error => {
        console.error('Error:', error);
        this.isLoading = false; // Stop loading in case of an error
      });
  }
  
}

