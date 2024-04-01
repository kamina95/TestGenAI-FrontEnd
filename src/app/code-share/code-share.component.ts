import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-code-share',
  templateUrl: './code-share.component.html',
  styleUrls: ['./code-share.component.css']
})
export class CodeShareComponent {
  codeInput: string = '';
  testInput: string = '';
  codeOutput: string = '';
  isLoading: boolean = false;
  selectedApi: string = 'openai'; // Default selection

  constructor(private http: HttpClient) {}

  processCode(): void {
    this.isLoading = true;
    this.codeOutput = ''; // Reset output

    const endpointUrl = this.selectedApi === 'openai' ? 'http://localhost:8080/api/submit_gpt' : 'http://localhost:8080/api/submit_llama';

        // Set responseType to 'text' to expect a plain text response
    this.http.post(endpointUrl, { code: this.codeInput, tests: this.testInput }, { responseType: 'text' })
      .subscribe(response => {
        this.codeOutput = response;
        this.isLoading = false; // Stop loading once the response is received
      }, error => {
        console.error('Error:', error);
        this.isLoading = false; // Stop loading in case of an error
      });
  }
}

