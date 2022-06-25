---
title: "Track web traffic anonymously"
date: "2022-06-27"
image: /assets/images/kobu-agency-FyvE6XPs5gk-unsplash.jpg
imageAlt: "Photo by KOBU Agency on Unsplash"
excerpt: Tracking traffic on a website is always a challenging job for organizations as well as individuals
tags:
  - "privacy"
  - "analytics"
  - "tech"
---

Tracking the traffic on a website is always a challenging job for organizations as well as individuals. Considering the privacy of individual users, we should always think twice before considering any platforms. I would like to divide this article into two main categories. First, we will talk about some industry-leading analytics tools, second will jump on open source solutions.

## Industry-leading tools

You must have seen Google Analytics on many websites, which is one of the free<sup>\*</sup> solutions for developers. When it comes to privacy, Google is not a good option to go, you can check my previous article: [Can we use Google services without compromising privacy?](/posts/can-we-use-google-services-without-compromising-privacy).

Some sites are enabled with Google Ads as well as Google Analytics which is helping the Google algorithm to get the most out of it. Google keeps cookies on your browser which helps Google to track your activities, even on other sites.

Similarly, on the other side, we have the Adobe Analytics tool, which is paid. It comes with great features, but having adobe analytics on a web platform is not an easy job for small businesses. Adobe comes with its license cost, which is not easy to procure for small businesses.

Mostly these tools keep your data on their own servers (Eg. [SAAS](https://en.wikipedia.org/wiki/Software_as_a_service)), so you don't have direct control over your data. In some cases it is fine, but in countries like Germany where data privacy laws are very strong. You need to inform end-users that all information you are taking from them and where it is going to be used.

Going with free options like Google, you might not be sure how Google will use your data. Since you took free service you need to pay the cost by data.

## Open source solution

I recently came across an open-source analytics tool called [umami.is](https://umami.is/) which is a self-hosted solution. It gives you full access to the data which is being collected from end-users. By default, this tool collects data in an anonymous manner, without creating any third-party cookie.

Their goal is to provide you with a friendlier, privacy-focused alternative to Google Analytics and a free, open-sourced alternative to paid solutions.

![Screenshot](/assets/images/umami-about-screenshot.png "Umami tool example screenshot")<small class="text-center block">Screenshot from [umami.is](https://umami.is/)</small>

Data that is being collected by the tool can be exposed over a public URL so that your website users can also see that is being stored in analytics. Example: [https://app.umami.is/share/ISgW2qz8/flightphp.com](https://app.umami.is/share/ISgW2qz8/flightphp.com).

You can find more about this tool on their website: [https://umami.is/docs/features](https://umami.is/docs/features).
