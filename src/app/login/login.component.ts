import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: any;
  mail: any; 
  loginData: any;


  login() {


    var body = {
      
      mail:this.mail,
      
      password:this.password

    }
    console.log()
    fetch("http://localhost:8000/signupandlogin/login", {
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
        this.loginData = result
       
        if(result.status === 'failed'){
          Swal.fire( 
            'Cancelled',
            'Invalid username or password!',
            'error'
          )
         }else{ 
          alert('successfully logged in')     
          window.location.href='/sign'
         }
      }

      ).catch(err =>

        console.log(err))
        
  }

}
