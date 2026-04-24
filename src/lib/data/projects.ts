import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'Reporsitory' },
			{ to: 'https://svelte.dev/', label: 'Svelte' },
			{ to: 'https://www.shadcn-svelte.com/', label: 'Shadcn Svelte' }
		],
		logo: Assets.Unknown,
		name: 'Slick Portfolio With Svelte',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'direct-x-vr-spatial-audio',
		color: '#ff5733',
		description:
			'Architected and implemented a VR application showcasing dynamically generated personalized audio through real-time processing of individualized Head-Related Transfer Functions (HRTFs). Developed a modular spatial audio engine featuring dynamic sound rendering algorithms.',
		shortDescription:
			'Algorithmic Spatial Audio System for Virtual Reality featuring real-time HRTF processing.',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://example.com/', label: 'Demo' }
		],
		logo: Assets.Unknown,
		name: 'Direct-X: VR Spatial Audio System',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2024, 5, 1)
		},
		skills: getSkills('cpp', 'unity', 'vr', 'audio-dsp'),
		type: 'MSc Dissertation'
	},
	{
		slug: 'custom-physical-audio-suite',
		color: '#33ff57',
		description:
			'Developed a 24-channel MIDI Controller using an Arduino microcontroller and engineered a two-module Analogue Synthesis System featuring VCOs and VCFs. Designed and fabricated custom enclosures using CAD and 3D printing.',
		shortDescription:
			'Hardware & Embedded Systems project involving a 24-channel MIDI controller and Analog Synthesis.',
		links: [
			{ to: 'https://github.com/', label: 'GitHub' },
			{ to: 'https://example.com/', label: 'Schematics' }
		],
		logo: Assets.Unknown,
		name: 'Physical Audio Synthesis Suite',
		period: {
			from: new Date(2021, 9, 1),
			to: new Date(2022, 6, 1)
		},
		skills: getSkills('arduino', 'electronics', 'cad', 'cpp'),
		type: 'BA Dissertation'
	},
	{
		slug: 'diy-analogue-synthesizer',
		color: '#f1c40f',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. DIY Analogue Synthesizer project focusing on Compastrassioon and signal flow.',
		shortDescription: 'A custom built DIY analogue synthesizer system.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'DIY Analogue Synthesizer',
		period: { from: new Date(2023, 1, 1) },
		skills: getSkills('electronics', 'analog-circuits'),
		type: 'Hardware'
	},
	{
		slug: 'universal-midi-module',
		color: '#9b59b6',
		description: 'A 3D printed universal MIDI synthesis control module designed for versatility across various digital audio workstations.',
		shortDescription: '3D printed MIDI control hardware.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Universal MIDI Control Module',
		period: { from: new Date(2023, 5, 1) },
		skills: getSkills('3d-printing', 'arduino', 'midi'),
		type: 'Embedded Systems'
	},
	{
		slug: 'moog-synth-emulator',
		color: '#e67e22',
		description: 'A software-based Moog synthesizer emulator application focusing on authentic filter recreation and oscillator stability.',
		shortDescription: 'Moog synthesizer emulation software.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Moog Synthesizer Emulator App',
		period: { from: new Date(2023, 10, 1) },
		skills: getSkills('ts', 'web-audio-api', 'angular'),
		type: 'Software'
	},
	{
		slug: 'plant-tamagotchi',
		color: '#2ecc71',
		description: 'An interactive IoT project that monitors plant health and requires "care" interactions similar to a Tamagotchi.',
		shortDescription: 'IoT based plant monitoring and care game.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Plant Tamagotchi',
		period: { from: new Date(2024, 1, 1) },
		skills: getSkills('iot', 'sensors', 'python'),
		type: 'IoT / Game'
	},
	{
		slug: 'diy-minecraft-compass',
		color: '#7f8c8d',
		description: 'A physical recreation of the Minecraft compass that points to a specific real-world coordinate using GPS.',
		shortDescription: 'Real-world Minecraft compass hardware.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'DIY Minecraft Compass',
		period: { from: new Date(2024, 2, 1) },
		skills: getSkills('arduino', 'gps', '3d-printing'),
		type: 'Hardware'
	},
	{
		slug: 'freelance-seo-engineer',
		color: '#3498db',
		description: 'Engineering high-performance websites optimized for search engine visibility and user experience.',
		shortDescription: 'SEO focused web engineering and optimization.',
		links: [{ to: 'https://example.com/', label: 'Portfolio' }],
		logo: Assets.Unknown,
		name: 'Freelance SEO Web Engineering',
		period: { from: new Date(2022, 0, 1) },
		skills: getSkills('seo', 'nextjs', 'google-analytics'),
		type: 'Freelance'
	},
	{
		slug: 'seo-content-creator',
		color: '#1abc9c',
		description: 'Strategic content creation focused on ranking for competitive keywords in the tech and audio niche.',
		shortDescription: 'Search engine optimized content strategy.',
		links: [{ to: 'https://example.com/', label: 'Articles' }],
		logo: Assets.Unknown,
		name: 'SEO Content Creator',
		period: { from: new Date(2022, 6, 1) },
		skills: getSkills('copywriting', 'marketing', 'seo'),
		type: 'Freelance'
	},
	{
		slug: 'purchase-payment-website',
		color: '#27ae60',
		description: 'A business website integrating secure purchase and payment workflows for digital products.',
		shortDescription: 'E-commerce and payment integration platform.',
		links: [{ to: 'https://example.com/', label: 'Live Site' }],
		logo: Assets.Unknown,
		name: 'Purchase Payment Business Website',
		period: { from: new Date(2023, 3, 1) },
		skills: getSkills('stripe', 'node', 'react'),
		type: 'Web Development'
	},
	{
		slug: '3d-spatial-vr-installation',
		color: '#8e44ad',
		description: 'An immersive 3D spatial installation designed for VR headsets, focusing on environmental storytelling.',
		shortDescription: 'Immersive VR spatial installation.',
		links: [{ to: 'https://example.com/', label: 'Case Study' }],
		logo: Assets.Unknown,
		name: '3D Spatial VR Installation',
		period: { from: new Date(2023, 7, 1) },
		skills: getSkills('unity', 'csharp', 'blender'),
		type: 'VR Installation'
	},
	{
		slug: 'vr-space-trucker',
		color: '#2c3e50',
		description: 'A VR game where players navigate a spacecraft through debris fields to deliver cargo across the galaxy.',
		shortDescription: 'Space simulation VR game.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'VR Space Trucker',
		period: { from: new Date(2023, 11, 1) },
		skills: getSkills('unity', 'csharp', 'vr-toolkit'),
		type: 'Game Development'
	},
	{
		slug: 'cpp-graphics-renderer',
		color: '#c0392b',
		description: 'BASIC C++ GRAPHICS TEST. A custom graphics engine built from scratch to understand the rendering pipeline.',
		shortDescription: 'Low-level C++ graphics rendering engine.',
		links: [{ to: 'https://github.com/', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'C++ Graphics Renderer',
		period: { from: new Date(2024, 0, 1) },
		skills: getSkills('cpp', 'opengl', 'graphics-programming'),
		type: 'Software Engineering'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
