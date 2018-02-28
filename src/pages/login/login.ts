import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public guest = false;
  
  constructor(public navCtrl: NavController) {}

  /**
   * Based on the user's input and login choice call the 
   * necessary method to execute login.
   */
  chooseLogin(choice): void {
    switch (choice) {
      case 'fbLogin': {
        //authorize with fb
        this.authorizeFB();
        break;
      }
      case 'gLogin': {
        //authorize with google auth
        this.authorizeGoogle();
        break;
      }
      case 'guest': {
        //continue to app as guest
        this.proceedAsGuest();
        break;
      }
      default:
        break;
    }
  }//end chooseLogin
  
  /**
   * Log user in with Facebook authentication
   */
  authorizeFB(): void {
    console.log('authorize with fb');
  }
  
  /**
   * Log user in with Google authentication
   */
  authorizeGoogle(): void {
    console.log('authorize with google auth');
  }
  
  /**
   * Don't log user in just continue to the app as a 
   * Guest and have all features available other than favoriting
   * and reviews will be saved as anonymous user
   */
  proceedAsGuest(): void {
    console.log('continue as guest');
  }
}//end class
