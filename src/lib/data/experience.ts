import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
    {
        slug: 'star-travels-web-dev',
        company: 'Star Travels',
        description: 'Designed and developed a static webpage integrated with a mobile payment API to facilitate digital bus ticket purchases via mobile scanning in Zimbabwe. Implemented a user-friendly interface enabling passengers to scan and securely pay for bus tickets, streamlining the launch of a private bus company for its initial routes.',
        contract: ContractType.Freelance,
        type: 'Web Development & Fintech',
        location: 'Zimbabwe (Remote)',
        period: { 
            from: new Date(2024, 0, 1), 
            to: new Date(2024, 5, 1) 
        },
        skills: getSkills('svelte', 'stripe', 'qr-codes', 'js', 'api-integration'),
        name: 'Freelance Web Developer',
        color: '#f39c12',
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Developed a mobile-first ticketing and payment solution for a private bus company in Zimbabwe.'
    },
    {
        slug: 'chitchat-seo-specialist',
        company: 'Chitchat',
        description: 'Engineered and implemented SEO-optimized content assets to drive organic international traffic growth. Developed and deployed content frameworks aligned with search engine algorithms, utilizing a systematic approach to keyword research and addressing specific gaps in user knowledge to improve app adoption.',
        contract: ContractType.Freelance,
        type: 'SEO & Content Engineering',
        location: 'Zambia (Remote)',
        period: { 
            from: new Date(2024, 6, 1), 
            to: new Date() 
        },
        skills: getSkills('seo', 'content-strategy', 'marketing-analytics', 'copywriting'),
        name: 'Freelance SEO Content Specialist',
        color: '#2ecc71',
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'Optimized international organic growth through data-driven SEO frameworks and content planning.'
    }
];

const ExperienceData = { title, items };

export default ExperienceData;
