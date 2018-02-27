import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  private email: any;
  private pw: any;
  public loginChoice: any;
  public guest = false;
  public loginInfo: FormGroup;
  
  constructor(public navCtrl: NavController) {}

  /**
   * Based on the user's input and login choice call the 
   * necessary method to execute login.
   */
  chooseLogin(choice): void {
    switch (choice) {
      case 'ldLogin': {
        //authorize with email and pw
        this.authorizeLD();
        break;
      }
      case 'fbLogin': {
        //authorize with fb
        break;
      }
      case 'gLogin': {
        //authorize with google auth
        break;
      }
      case 'create': {
        //go to create acct page
        break;
      }
      case 'guest': {
        //continue to app as guest
        break;
      }
      default:
        break;
    }
  }//end chooseLogin
  
  /**
   * Authorize user with app specific login with user
   * email and password
   */
  authorizeLD() {
    
  }
  
  /**
   * Log user in with Facebook authentication
   */
  authorizeFB() {
    
  }
  
  /**
   * Log user in with Google authentication
   */
  authorizeGoogle() {
    
  }
  
  /**
   * Don't log user in just continue to the app as a 
   * Guest and have all features available other than favoriting
   * and reviews will be saved as anonymous user
   */
  proceedAsGuest() {
    
  }
  
  /**
   * Send user to create account page to make an account 
   * in the app rather than Facebook/Google auth options
   */
  goToCreateAccount() {
    
  }  
}//end class
