import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		"Hi, I'm Anesu. Post-grad programmer and musician. Mostly though, I like to make things.",
	links: [
		{ label: 'GitHub', href: 'https://github.com', icon: 'i-carbon-logo-github' },
		{ label: 'Email', href: 'mailto:riadh.adrani@pm.me', icon: 'i-carbon-at' },
		{ label: 'LinkedIn', href: 'https://linkedin.com', icon: 'i-carbon-logo-linkedin' },
		
		
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
