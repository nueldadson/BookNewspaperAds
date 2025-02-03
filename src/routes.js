// src/routes.js
import React from "react";
import { Home, About,Contact } from "./pages";

export const routes = [
	{
		label: "Home",
		path: "/",
		component: Home,
		title: "BookNewspaperAds | Book Newspaper Ads Online",
		description:
			"Book newspaper ads online seamlessly with BookNewspaperAds. Advertise across top newspapers with ease.",
	},
	{
		label: "Contact Us",
		path: "/contact-us",
		component: Contact,
		title: "Contact BookNewspaperAds | Get in Touch With Us",
		description:
			"Have questions? Contact BookNewspaperAds for inquiries about booking newspaper advertisements.",
	},
	{
		label: "About Us",
		path: "/about-booknewspaperads",
		component: About,
		title: "About BookNewspaperAds | Your Online Newspaper Ad Booking Platform",
		description:
			"Learn more about BookNewspaperAds and how we make booking newspaper advertisements simple and hassle-free.",
	},
];
