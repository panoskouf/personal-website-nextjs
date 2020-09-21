import { createMuiTheme, Theme } from '@material-ui/core/styles'
import { expand } from '../helpers/helpers'

const defaultTypography = {
	htmlFontSize: 10,
	fontFamily: ['Raleway', '"Helvetica"', 'Montserrat', 'sans-serif'].join(','),
	...expand({
		'h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,button': {
			fontFamily: 'Raleway',
		},
	}),
	...expand({
		'body1,body2': {
			fontFamily: 'Montserrat',
		},
	}),
}

const defaultFontSize = {
	html: {
		/* 62.5% of 16px = 10px */
		fontSize: '62.5%',
	},
	body: {
		fontSize: '1.6rem',
	},
}

export interface ExtendedTheme extends Theme {
	l: (arg0: string | null, arg1: string | null) => any
	d: (arg0: string | null, arg1: string | null) => any
	max: (arg0: string) => string
	min: (arg0: string) => string
}

const themeFunctions: any = {
	l: function (vLight = null, vDark = null) {
		return this.palette.type === 'light' ? vLight : vDark
	},
	d: function (vDark = null, vLight = null) {
		return this.palette.type === 'dark' ? vDark : vLight
	},
}

const breakPoints: any = {
	breakpoints: {
		values: {
			xss: 344,
			xs: 375,
			sm: 430,
			md: 560,
			lg: 970,
			xl: 1200,
		},
	},
	bp: function bp(breakPoint: string) {
		return this.breakpoints.values[breakPoint]
	},
	max: function (region: string) {
		return `@media (max-width: ${this.bp(region)}px)`
	},
	min: function (region: string) {
		return `@media (min-width: ${this.bp(region)}px)`
	},
}

const light = createMuiTheme({
	...breakPoints,
	spacing: 10,
	palette: {
		type: 'light',
		background: {
			default: '#fff',
		},
		primary: {
			main: '#673ab7',
		},
		secondary: {
			main: '#189CF5',
		},
	},
	...themeFunctions,
	typography: defaultTypography,
	overrides: {
		MuiLink: {
			root: {
				color: 'black',
				textDecoration: 'underline !important',
				textDecorationColor: '#7800a675 !important',
				'&:hover': {
					background: 'linear-gradient(0deg,#b800ff,black)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					boxDecorationBreak: 'clone',
					textDecorationColor: '#3a3c3e !important',
				},
			},
		},
		MuiCssBaseline: {
			'@global': {
				...defaultFontSize,
				'*': {
					scrollbarColor: '#3a3c3e black',
					scrollbarWidth: 'thin',
				},
				'*::-webkit-scrollbar-corner': {
					backgroundColor: '#27292a',
				},
				'*::-webkit-scrollbar': {
					backgroundColor: '#2b2d2e',
				},
				'*::-webkit-scrollbar-thumb': {
					backgroundColor: '#3a3c3e',
				},
				'*::selection': {
					backgroundColor: 'rgba(221, 197, 221, 0.6)',
				},
			},
		},
	},
})

const dark = createMuiTheme({
	...breakPoints,
	spacing: 10,
	palette: {
		type: 'dark',
		background: {
			default: '#27292A',
		},
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#189CF5',
		},
	},
	...themeFunctions,
	typography: defaultTypography,
	overrides: {
		MuiLink: {
			root: {
				color: '#bdbdbd',
				textShadow: '0.5px 0px 0px purple',
			},
		},
		MuiCssBaseline: {
			'@global': {
				...defaultFontSize,
				'*': {
					scrollbarColor: '#3a3c3e black',
					scrollbarWidth: 'thin',
				},
				'*::-webkit-scrollbar-corner': {
					backgroundColor: '#27292a',
				},
				'*::-webkit-scrollbar': {
					backgroundColor: '#2b2d2e',
				},
				'*::-webkit-scrollbar-thumb': {
					backgroundColor: '#3a3c3e',
				},
				'*::selection': {
					backgroundColor: 'rgba(156, 129, 156, 0.52)',
				},
			},
		},
	},
})

const themes = { light, dark }

export default themes
