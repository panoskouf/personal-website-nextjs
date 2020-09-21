import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import NavLink from './NavLink'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	cont: {
		/* placement */
		position: 'absolute',
		left: 0,
		top: 450,
		/* styling */
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		background: '#ffffff40',
		padding: 10,
		'@media all and (max-width: 1400px)': {
			'&': {
				display: 'none',
			},
		},
	},
	icon: {
		position: 'relative',
		textAlign: 'center',
		fontSize: '4rem',
	},
	navLink: {
		padding: 0,
		margin: 10,
	},
}))

const DevWidget = () => {
	const s = useStyles()
	return (
		<div className={s.cont}>
			{/*  eslint-disable-next-line jsx-a11y/accessible-emoji */}
			<Box className={s.icon}>👷‍♂️</Box>
			<Box mt={2}>
				{/* add links for quick access in development only */}
				<NavLink sCustom={s.navLink} href="/todo">
					todo
				</NavLink>
			</Box>
		</div>
	)
}

export default DevWidget
