import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { loginText } from '../../config';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginText = loginText;
  constructor(public navCtrl: NavController) {}
  
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
