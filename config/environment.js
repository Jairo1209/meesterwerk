/**
 * Environment variables
 *
 * nuxt-boilerplate
 *
 */

// eslint-disable-next-line
require('dotenv').config();

export default {
  BASE_URL: process.env.BASE_URL,
  ENVIRONMENT: process.env.ENVIRONMENT,
  CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT,
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  GTM_ID: process.env.GTM_ID,
  SITENAME: process.env.SITENAME,
  PREVIEW_MODE: process.env.PREVIEW_MODE,
  SSR: process.env.SSR
}
