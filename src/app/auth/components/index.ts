import { AuthEmailComponent } from "./email/email.component";
import { AuthFacebookComponent } from "./facebook/facebook.component";
import { AuthGoogleComponent } from "./google/google.component";
import { AuthGithubComponent } from "./github/github.component";
import { AuthPhoneComponent } from "./phone/phone.component";
import { EmailSignInComponent } from "./email/signIn/email-signIn.component";
import { EmailSignUpComponent } from "./email/signUp/email-signUp.component";

export const COMPONENTS = [
  AuthEmailComponent,
  EmailSignUpComponent,
  EmailSignInComponent,
  AuthFacebookComponent,
  AuthGoogleComponent,
  AuthGithubComponent,
  AuthPhoneComponent,
];