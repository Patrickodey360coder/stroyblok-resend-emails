import { storyblokEditable } from "@storyblok/react";
import WelcomeEmail from "../emails/WelcomeEmail";

export const EmailTemplate = ({ blok, firstName = "Patrick" }) => (
  <WelcomeEmail
    {...storyblokEditable(blok)}
    blok={blok}
    firstName={firstName}>  
  </WelcomeEmail>
);

export default EmailTemplate;
