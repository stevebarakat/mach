# MACH Architecture Cheat Sheet

A quick-reference guide to building a "best-of-breed" MACH stack for e-commerce and content-driven businesses. Built with React + Vite.

## What is MACH?

**MACH** stands for:

- **M**icroservices — independent, loosely coupled services
- **A**PI-first — every service communicates via well-documented APIs
- **C**loud-native — built to run and scale in the cloud
- **H**eadless — frontend is decoupled from backend services

## Services Reference

| Function | Category | Primary Example |
|---|---|---|
| Frontend | Headless Application Framework | Next.js |
| Content | Headless CMS | Contentful |
| E-commerce | Composable Commerce Platform | Shopify |
| Events | Event Management Platform | Eventbrite |
| Email Delivery | Email Service Provider (ESP) | SendGrid |
| Email Marketing | Marketing Automation Platform | Mailchimp |
| CRM/Automation | CRM & Automation Platform | HubSpot |
| Search | Search-as-a-Service | Algolia |
| Translations | Translation Management System | Weglot |
| Forms | Forms-as-a-Service | Typeform |

## The "Glue"

- **APIs** — every service exposes a well-documented API
- **The Frontend App** — Next.js orchestrates all API calls into a single user experience
- **Integration Tools** — Zapier or Make sync data between backend services

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```
