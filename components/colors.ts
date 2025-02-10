interface BrandColors {
  brand1: string;
  brand1Light: string;
  brand1Lighter: string;
  brand1Lightest: string;
  brand1Dark: string;
  brand1Darker: string;
  brandDimm: string;
  homeHeroNameBackground: string;
  bg: string;
}

export const colors: Record<string, BrandColors> = {
	'frontier': {
		brand1: '#5E72A7',
		brand1Light: '#7A8BB8',
		brand1Lighter: '#96A4C9',
		brand1Lightest: '#B2BDDA',
		brand1Dark: '#4B5A85',
		brand1Darker: '#384263',
		brandDimm: 'rgba(255, 87, 34, 0.08)',
		homeHeroNameBackground: '#5E72A7',
		bg: '#efebe6'
	}
}

export type Brand = keyof typeof colors;