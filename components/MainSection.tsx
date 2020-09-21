import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	spacing: {
		margin: 30,
	},
	'@media (max-width: 970px)': {
		spacing: { margin: 0 },
	},
}))

const MainSection = ({ children }: any) => {
	const s = useStyles()
	return <Box className={s.spacing}>{children}</Box>
}

export default MainSection
