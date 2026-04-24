const ContactData = {
	title: 'Contact',
	formEndpoint: 'https://formspree.io/f/xyklokbq',
	links: [
		{ label: 'GitHub', href: 'https://github.com/YOUR_USERNAME', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_USERNAME', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:your@email.com', icon: 'i-carbon-at' }
	]
} as const;

export default ContactData;
