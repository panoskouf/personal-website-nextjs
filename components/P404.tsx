/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PageWrapper from './PageWrapper'
import { makeStyles } from '@material-ui/core/styles'
import Link from './Link'
import { ExtendedTheme } from '../configs/theming'

/* https://material-ui.com/styles/advanced/ */

const useStyles = makeStyles((t: ExtendedTheme) => ({
	cont: {
		textAlign: 'center',
		height: '100%',
		fontSize: '20rem',
		width: '100%',
	},
	text404: {
		marginTop: '10vh',
		fontFamily: 'monospace',
	},
	'@keyframes rotate360': {
		from: { transform: 'rotate(-360deg)' },
		to: { transform: 'rotate(0deg)' },
	},
	rotating: {
		animation: '$rotate360 0.2s linear 5  ',
	},
	'@keyframes fadeIn': {
		'0%': { opacity: 0 },
		'66%': { opacity: 0 },
		'100%': { opacity: 1 },
	},
	appear: {
		animation: '1.6s ease 0s normal forwards 1 $fadeIn',
	},
	descr: {
		fontSize: '0.5em',
	},
	goBack: {
		fontSize: '1.6rem',
		position: 'absolute',
		bottom: 85,
		cursor: 'pointer',
		animation: '3s ease 0s normal forwards 1 $fadeIn',
		display: 'block',
	},
	[t.max('md')]: {
		cont: { fontSize: '15rem' },
	},
	[t.max('sm')]: {
		cont: { fontSize: '10rem' },
		descr: {
			'& br': { display: 'none' },
		},
		goBack: {
			left: 40,
		},
	},
}))

const P404 = () => {
	const s = useStyles()

	return (
		<PageWrapper>
			<div className={s.cont}>
				<div className={`${s.text404} ${s.rotating}`}>404</div>
				<div className={`${s.descr} ${s.appear}`}>
					Page Not{` `}
					<br />
					Found
				</div>
				<Link n href="/" sCustom={s.goBack}>
					↩ Home
				</Link>
			</div>
		</PageWrapper>
	)
}

export default P404
