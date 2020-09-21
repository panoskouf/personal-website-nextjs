import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Layout from './Layout'
import Profile from './Profile'
import MainSection from './MainSection'
import NavBar from './NavBar'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	flexBox: {
		margin: 20,
		width: 'calc(100% - 40px)',
		/* needed for footer placement */
		height: '100%',
		display: 'flex',
		paddingLeft: 20,
		paddingRight: 20,
	},
	profileBox: { marginRight: 50 },
	mainContent: { width: '79%' },
	mainContentPadding: { paddingTop: 20 },
	maxWidth970: { display: 'none' },
	minWidth970: { display: 'block' },
	[t.max('lg')]: {
		mainContentPadding: { paddingTop: 40 },
		flexBox: {
			flexDirection: 'column',
		},
		profileBox: { marginRight: 0 },
		mainContent: { width: '100%' },
		maxWidth970: { display: 'block' },
		minWidth970: { display: 'none' },
	},
	[t.max('sm')]: {
		flexBox: { padding: 0 },
	},
}))

const ProfileLayout = ({ children }: any) => {
	const s = useStyles()

	return (
		<Layout>
			<Box className={s.flexBox}>
				<Box className={s.maxWidth970}>
					<Box mb={4}>
						<NavBar />
					</Box>
				</Box>
				<Box className={s.profileBox}>
					<Profile />
				</Box>
				<Box className={s.mainContent}>
					<Box className={s.minWidth970}>
						<NavBar />
					</Box>
					<Box className={s.mainContentPadding} />
					<MainSection>{children}</MainSection>
				</Box>
			</Box>
		</Layout>
	)
}

export default ProfileLayout
