import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  Items: any;
  firstname: any;
  lastname: any;
  mail: any;
  mobilenumber: any;
  password: any;
  registereduser: any;


  constructor() {

  }

  postVehile() {


    var body = {
      firstname:this.firstname,
      lastname:this.lastname,
      mail:this.mail,
      mobilenumber:this.mobilenumber,
      password:this.password

    }
    console.log()
    fetch("http://localhost:8000/signupandlogin/post", {
      method: 'POST',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(body),

    })
      .then(response => response.json())
      .then( result => {
        console.log(result)
        this.registereduser = result
        alert('Singup Successfully')
        window.location.href='/login'
      }

      ).catch(err =>

        console.log(err))

  }
}
