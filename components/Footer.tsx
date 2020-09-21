import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	footer: {
		/* linked to widthCont */
		/* widthCont's padding is the size of height of footer */
		position: 'relative',
		bottom: 20 /* account for margin */,
		left: 0,
		right: 0,
		zIndex: 100,
		/* footer styling */
		borderTop: '1px solid #454c56',
		/* match MainContent margins */
		margin: '0 40px',
		textAlign: 'center',
		paddingTop: 20,
	},
	content: {
		color: t.l('#222222', '#949494'),
		fontSize: '1.4rem',
	},
}))

const Footer = () => {
	const s = useStyles()
	return (
		<div className={s.footer}>
			<Box>
				<span className={s.content}>© 2020 - Your Name here</span>
			</Box>
		</div>
	)
}

export default Footer
