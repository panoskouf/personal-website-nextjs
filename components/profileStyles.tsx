import { makeStyles } from '@material-ui/core/styles'
import { expand } from '../helpers/helpers'
import { ExtendedTheme } from '../configs/theming'

export default makeStyles((t: ExtendedTheme) => ({
	profileSection: {
		display: 'flex',
		flexDirection: 'column',
	},
	profileDetails: {
		marginLeft: 4,
	},
	descrBox: {
		fontSize: '1.8rem',
		marginTop: 20,
	},
	lineCont2: {
		marginTop: 5,
	},
	svg: {
		color: t.l('black', '#d9d3c9'),
		marginRight: 8,
		verticalAlign: 'text-bottom',
	},
	briefcaseSvg: {
		verticalAlign: 'text-bottom',
		marginLeft: -2.5,
		marginRight: 6.5,
		'& > path': {
			stroke: t.l('black', '#d9d3c9'),
		},
	},
	mailSvg: {
		verticalAlign: 'text-bottom',
		'& > path': {
			fill: t.l('black', '#d9d3c9'),
		},
	},
	socialIcon: {
		position: 'relative',
		marginRight: 10,
		'&:hover': {
			cursor: 'pointer',
			marginTop: -1,
		},
		'&:hover:before': {
			content: '""',
			position: 'absolute',
			top: 3,
			left: 3,
			width: 17,
			height: 17,
			display: 'inline-block',
			zIndex: 10,
		},
		'&[id="linked-in"]:hover:before': {
			background: t.l(null, '#0077b5'),
		},
		'&[id="github"]:hover': {
			transform: 'rotate(-7deg)',
		},
		'&[id="github"]:hover:before': {
			background: t.l(null, '#34393e'),
		},
		'&[id="twitter"]:hover:before': {
			background: t.l(null, '#43b1f4'),
		},
		'&[id="mail-to"]:hover': {
			cursor: 'default',
			marginTop: 0,
		},
	},
	socialSvg: {
		position: 'relative',
		zIndex: 100,
		height: 24,
		width: 24,
		filter: t.l(null, 'invert(0.95)'),
	},
	socialSvgMail: {
		position: 'relative',
		zIndex: 100,
		height: 24,
		width: 24,
	},
	name: {
		marginTop: 20,
	},
	socialBoxes: {
		marginTop: 25,
	},
	[t.max('lg')]: {
		profileSectionCont: {
			maxWidth: 520,
		},
		profileSection: {
			flexDirection: 'row',
		},
		profileDetails: {
			marginLeft: 30,
			alignSelf: 'center',
		},
		name: {
			marginTop: 0,
		},
		descrBox: {
			marginTop: 10,
			marginLeft: 3,
		},
		socialBoxes: {
			marginTop: 15,
		},
	},
	[t.max('sm')]: {
		profileSection: {
			justifyContent: 'center',
		},
		profileDetails: {
			marginLeft: 20,
			width: 140,
			'& div': {
				fontSize: '2rem',
			},
		},
		svg: {
			height: 21,
		},
		briefcaseSvg: {
			height: 22,
		},
		...expand({
			'lineCont, lineCont2': {
				'& a': {
					fontSize: '1.6rem',
				},
			},
		}),
		socialIcon: {
			marginRight: 12,
		},
		socialSvg: {
			height: 22,
			width: 22,
		},
		mailSvg: {
			verticalAlign: 'baseline',
			height: 19,
			width: 18,
		},
	},
	[t.max('xss')]: {
		profileSection: {
			flexDirection: 'column',
			width: 145,
		},
		profileDetails: {
			marginTop: 40,
		},
	},
}))
