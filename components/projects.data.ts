import { defineLoader } from 'vitepress';

export type Project = {
	number: string,
	title: string,
	description: string,
	icon: any,
	link?: string,
	fetchLink?: string,
	wip?: boolean,
	version?: string,
}

declare const data: Project[]
export { data }

export default defineLoader({
	async load(): Promise<Project[]> {
		const projects: Project[] = [
			{
				number: '01',
				title: 'Serinus',
				description: 'Backend for Dart. Opinionated to just the right degree.',
				icon: 'serinus',
				link: 'https://serinus.app',
				fetchLink: 'https://pub.dev/api/packages/serinus'
			},
			{
				number: '02',
				title: 'Acanthis',
				description: 'Your best pal for validating data in Flutter & Dart applications.',
				icon: 'acanthis',
				link: 'https://acanthis.avesbox.com',
				fetchLink: 'https://pub.dev/api/packages/acanthis'
			},
			{
				number: '03',
				title: 'Frontier',
				description: 'Simple authentication for Dart & Flutter applications.',
				icon: 'frontier',
				link: 'https://frontier.avesbox.com',
				fetchLink: 'https://pub.dev/api/packages/frontier'
			},
			{
				number: '04',
				title: 'Loxia',
				description: 'An ORM that speaks Dart with type-safety and elegance.',
				wip: true,
				icon: 'loxia',
			},
			{
				number: '05',
				title: 'Canary',
				description: 'Lightweight Shiki transformer to add Dart code inspection hovers in VitePress.',
				icon: 'canary',
				link: 'https://npmjs.com/package/@avesbox/canary'
			},
			{
				number: '06',
				title: 'Secure Session',
				description: 'Secure, encrypted, and tamper-proof sessions for Dart & Flutter applications.',
				icon: 'secure_session',
				link: 'https://pub.dev/packages/secure_session'
			},
		];
		for (const project of projects) {
			if (project.fetchLink) {
				try {
					const response = await fetch(project.fetchLink);
					if (response.ok) {
						const data = await response.json();
						if (data.latest && data.latest.version) {
							project.version = data.latest.version;
						}
					}
				} catch (error) {
					console.error(`Failed to fetch version for project ${project.title}:`, error);
				}
			}
		}
		console.log('Loaded projects data:', projects);
		return [
			...projects
		];
	}
})