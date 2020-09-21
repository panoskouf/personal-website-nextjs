import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	link: {
		color: t.l('black', '#bdbdbd'),
		textShadow: t.l(null, '0.5px 0px 0px purple'),
		textDecoration: t.l('underline', 'none'),
		textDecorationColor: t.l('#7800a675', null),
	},
}))

/* n for next */
/* https://nextjs.org/docs/api-reference/next/link */
function Link({ children, href, sCustom = '', n = false, nParams = {} }) {
	const s = useStyles()
	/* todo NextJS link Options + normal link properties  */
	return n ? (
		<NextLink href={href} {...nParams}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a className={`${s.link} ${sCustom}`}>{children}</a>
		</NextLink>
	) : (
		<a
			href={href}
			className={`${s.link} ${sCustom}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	)
}

export default Link
