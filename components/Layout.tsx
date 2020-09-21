import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'
import DevWidget from './DevWidget'
import { ExtendedTheme } from '../configs/theming'

const isProduction = process.env.NODE_ENV === 'production'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	pageContainer: {},
	centerContent: {
		display: 'flex',
		justifyContent: 'center',
	},
	widthCont: {
		/* rules for footer */
		minHeight: '100vh',
		position: 'relative',
		paddingBottom: 80,
		/* rules for width */
		maxWidth: 1280,
		flexGrow: 1,
		'@media(maxWidth: 1400px)': {
			width: '100%',
		},
	},
}))

interface LayoutProps {
	children?: any
	footerDisable?: Boolean
}

const Layout = ({ children, footerDisable }: LayoutProps) => {
	const s = useStyles()

	return (
		<div className={s.pageContainer}>
			{!isProduction && <DevWidget />}
			<div className={s.centerContent}>
				<div className={s.widthCont}>
					{children}
					{!footerDisable && <Footer />}
				</div>
			</div>
		</div>
	)
}

export default Layout
