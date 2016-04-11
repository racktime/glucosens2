import { Component } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Http, Headers } from 'angular2/http';

@Component({
  selector: 'login',
  templateUrl: 'showcase/login/login.html',
  //styles: [ styles ]
  styleUrls: ['showcase/login/login.css'],
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ]
})

export class Login {
  constructor(public router: Router, public http: Http) {
  }
  
  login(event, username, password) {
    event.preventDefault();
    
    let body = JSON.stringify({ username, password });    
    //로그인 서비스 ?    
    let contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          //this.router.parent.navigateByUrl('/HomePage');
        },
        error => {
          console.log(error.text());
        }
      );
      //임시.
      localStorage.setItem('jwt', 'test_id');
      this.router.parent.navigate(['HomePage']);
  }

  signup(event) {
    event.preventDefault();
    //this.router.parent.navigateByUrl('/signup');
  }
}
