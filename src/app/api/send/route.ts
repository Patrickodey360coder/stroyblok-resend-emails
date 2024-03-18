import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import WelcomeEmail from "../../../../emails/WelcomeEmail";
// import { getStoryblokApi, apiPlugin } from '@storyblok/react';

export async function POST() {
  try {

    // const storyblokApi = getStoryblokApi()
    // const { data: {story} } = await storyblokApi.get('cdn/stories/email/template', {  version: "draft" });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: "Storyblok <onboarding@resend.dev>",
      to: [process.env.TESTING_EMAIL_ADDRESS],
      subject: "Welcome to Storyblok",
      react: WelcomeEmail({
        // blok: story.content,
        // firstName: ""
      })
    });

    return NextResponse.json({
      message: "Email sent successfully", 
      data
    });

  } catch(error){
    return NextResponse.json({
      error,
      message: "Failed To send"
    })
  }
}


















// import EmailTemplate from '../../../../components/EmailTemplate';
// import { Resend } from 'resend';
// import * as React from 'react';
// import { WelcomeEmail } from '../../../../.next/static/webpack/app/layout.b1260aad6e86e470.hot-update';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Patrick from <onboarding@resend.dev>',
//       to: [process.env.TESTING_EMAIL_ADDRESS],
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
//     });

//     if (error) {
//       return Response.json({ error });
//     }

//     console.log(data)
//     return Response.json({ data });

//   } catch (error) {
//     return Response.json({ error });
//   }
// }

// export async function GET() {
//   await resend.emails.send({
//     from: 'onboarding@resend.dev',
//     to: 'patrick.odey@storyblok.com',
//     subject: 'hello world',
//     react: EmailTemplate()
//   })
//   return Response.json({
//     status: "Okay"
//   })
// }