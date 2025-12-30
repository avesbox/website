export const posts = [
    {
		title: 'Frontier - Streamlining User Authentication in Dart',
		src: '/blog/frontier_presentation_page/frontier_presentation_page.webp',
		alt: 'Frontier: Streamlining User Authentication in Dart',
		date: '12 Feb 2025',
		href: '/blog/frontier_presentation',
		author: 'Francesco Vallone'
    },
	{
		title: 'Avesbox - Unleash the power of Dart on the backend',
		src: '/blog/unleash_the_power/unleash_the_power.webp',
		alt: 'Unleash the power of Dart on the backend',
		date: '11 Nov 2024',
		href: '/blog/unleash_the_power',
      	author: 'Francesco Vallone'
    },
]

export const authors = {
    "Francesco Vallone": {
        src: 'francesco_vallone.webp',
        twitter: 'francescovll'
    }
}

export type Authors = typeof authors

export interface Post {
    title: string
    src?: string
    alt?: string
    author: keyof Authors
    desc?: string
    date: string
    lastUpdated?: string
    shadow?: boolean
    tags: string[],
    href: string
}