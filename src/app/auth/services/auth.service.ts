import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthEmail, AuthPhone, AuthPhoneCode } from '../models/auth.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public windowRef: any;
  private confirmationVerification: any;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  public signInAnonymous() {
    return Observable.fromPromise(this.afAuth.auth.signInAnonymously())
  }

  public signInWithEmail(payload: AuthEmail) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(payload.email, payload.password))
  }

  public signInWithGoogle() {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }

  public signInWithFacebook() {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()));
  }

  public signInWithTwitter() {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()));
  }

  public signInWithGithub() {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()));
  }

  public signInWithPhone(payload: AuthPhone) {
    let phonePromise = new Promise((resolve, reject) => {
      firebase.auth().signInWithPhoneNumber(`${payload.country}${payload.number}`, new firebase.auth.RecaptchaVerifier('recaptcha-container'))
        .then(function (confirmationResult) {
          this.confirmationResult = confirmationResult;
          resolve();
        }).catch(function (error) {
          console.error('[ Auth Phone ] - Cannot send sms confirmation code ', error);
        });
    })

  }

  public verifyPhoneCode(payload: AuthPhoneCode) {
    return Observable.fromPromise(this.confirmationVerification.confirm(payload.code))
  }


}