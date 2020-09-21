import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	link: {
		fontWeight: 'bold',
		fontSize: '1.8rem',
		margin: 'auto 10px',
		color: (props: { active }) =>
			props.active ? t.l('black', 'white') : t.l('#5d5d5d', '#b2b2b2'),
		textDecoration: 'unset',
		borderBottom: '4px solid transparent',
		padding: '5px 0px',
		paddingBottom: 15,
		'&:hover': {
			color: t.l('black', '#ededed'),
		},
	},
}))

function NavLink({ children, href, sCustom = '' }) {
	const router = useRouter()
	const active = router.pathname === href
	const s = useStyles({ active })

	return (
		<Link href={href}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a className={`${s.link} ${sCustom}`}>{children}</a>
		</Link>
	)
}

export default NavLink
