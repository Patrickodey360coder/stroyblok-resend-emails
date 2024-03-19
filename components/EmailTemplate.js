import WelcomeEmail from '../emails/WelcomeEmail'

export const EmailTemplate = ({ blok, firstName = 'Patrick' }) => (
  <WelcomeEmail blok={blok} firstName={firstName}></WelcomeEmail>
)

export default EmailTemplate
