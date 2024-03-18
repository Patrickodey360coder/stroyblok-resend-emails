"use client";
import "../src/app/globals.css";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from './Page';
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import EmailTemplate from "./EmailTemplate";

const components = {
  page: Page,
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  "email-template": EmailTemplate
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  region: '',
  components
});

export default function StoryblokProvider({ children }){
  return children;
}