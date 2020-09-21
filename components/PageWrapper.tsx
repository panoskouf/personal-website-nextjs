import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	pageWrapper: {
		margin: 20,
		width: 'calc(100% - 40px)',
		/* needed for footer placement */
		height: '100%',
		display: 'flex',
		paddingLeft: 20,
		paddingRight: 20,
	},
	[t.max('lg')]: {
		pageWrapper: {
			flexDirection: 'column',
		},
	},
	[t.max('sm')]: {
		pageWrapper: { padding: 0 },
	},
}))

const PageWrapper = ({ children }: any) => {
	const s = useStyles()
	return <Box className={s.pageWrapper}>{children}</Box>
}

export default PageWrapper
