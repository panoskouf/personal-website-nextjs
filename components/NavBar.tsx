/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import ThemeContext from '../configs/themeContext'
import NavLink from './NavLink'
import { routeAllowed } from '../configs/pages'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	navBar: {
		marginTop: 15,
		maxWidth: '100%',
		justifyContent: 'space-between',
		borderBottom: '1px solid #454c56',
	},
	navLinks: {
		marginLeft: 25,
		justifyContent: 'space-start',
	},
	ops: {
		marginRight: 25,
	},
	firstLink: {
		marginLeft: 25,
	},
	svgsCont: {
		padding: '5px 7px 0px 22px',
		borderTop: t.l('1px solid black', '1px solid #494c56'),
		borderRight: t.l('2px solid black', '1px solid #454c56'),
		borderTopRightRadius: t.l('0px', '5px'),
		height: '25px',
	},
	darkModeSvg: {
		display: t.d('block', 'none'),
		height: 25,
		cursor: 'pointer',
		'& svg': {
			fill: '#c08ed5',
		},
		'& svg g path:nth-child(2)': {
			fill: 'white',
		},
	},
	lightModeSvg: {
		display: t.l('block', 'none'),
		height: 25,
		cursor: 'pointer',
		'& svg': {
			fill: '#d4aaff',
		},
	},
	[t.max('lg')]: {
		navBar: {
			marginTop: 0,
		},
	},
}))

const NavBar = () => {
	const { toggleTheme } = useContext(ThemeContext)

	const s = useStyles()
	return (
		<Box display="flex" className={s.navBar}>
			<Box display="flex" className={s.navLinks}>
				<NavLink href="/">About</NavLink>
				{routeAllowed('todo') && <NavLink href="/todo">todo</NavLink>}
			</Box>
			<Box display="flex" className={s.ops}>
				<div className={s.svgsCont}>
					<div
						className={s.darkModeSvg}
						onClick={() => {
							toggleTheme()
						}}
					>
						<svg
							width="25"
							height="25"
							viewBox="1 1 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0)">
								<path
									d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z"
									stroke="#454C56"
									strokeWidth="5"
								/>
								<path
									d="M15.5746 14.5623C16.5217 14.633 17.4644 14.4598 18.3159 14.0679C18.1094 14.8252 17.7558 15.5382 17.2715 16.1646C16.5728 17.0683 15.6312 17.7543 14.5569 18.1423C13.4825 18.5304 12.3199 18.6044 11.205 18.3559C10.0901 18.1073 9.06911 17.5463 8.26141 16.7386C7.45371 15.9309 6.89274 14.9099 6.64415 13.795C6.39555 12.6801 6.46962 11.5175 6.85767 10.4431C7.24573 9.36881 7.93172 8.42722 8.83539 7.72854C9.46176 7.24425 10.1748 6.89055 10.9321 6.68408C10.5402 7.53561 10.367 8.47832 10.4377 9.42539C10.5368 10.7549 11.1099 12.0047 12.0526 12.9474C12.9953 13.8901 14.2451 14.4632 15.5746 14.5623Z"
									stroke="black"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0">
									<rect width="25" height="25" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</div>
					<div
						className={s.lightModeSvg}
						onClick={() => {
							toggleTheme()
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							fill="none"
							viewBox="0 0 25 25"
						>
							<g stroke="#000" strokeLinejoin="round" clipPath="url(#clip0)">
								<path
									strokeWidth="3"
									d="M12.5 26.5c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14z"
								></path>
								<path
									fill="white"
									strokeLinecap="round"
									d="M12.5 18.958a6.458 6.458 0 100-12.916 6.458 6.458 0 000 12.916z"
								></path>
								<path
									strokeLinecap="round"
									strokeWidth="1.2"
									d="M5.886 6.376l1.548 1.267M17.493 15.877l1.548 1.267M3 13.06l2.814-.281M18.48 11.515l2.814-.28M7.15 19.041l1.267-1.548M16.651 7.434l1.267-1.548M13.06 21.294l-.281-2.814M11.515 5.814L11.235 3"
								></path>
							</g>
							<defs>
								<clipPath id="clip0">
									<path fill="#fff" d="M0 0H25V25H0z"></path>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</Box>
		</Box>
	)
}

export default NavBar
