import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-energy';

  date: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.date = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void{


  
        
} 

sendEmail(){
  let email$ = {
    name: this.date.value.name,
    email: this.date.value.name,
    number: this.date.value.name,
    value: this.date.value.value,
    messege: this.date.value.value,
  }
  this.httpClient.post('http://localhost:3000', email$).subscribe(resp => {
    console.log(resp)
  })
}
}
