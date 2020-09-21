import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { ExtendedTheme } from '../configs/theming'

interface IProps {
	done
}

const useStyles = makeStyles((t: ExtendedTheme) => ({
	todoCategory: {
		fontSize: '2.6rem',
		textDecoration: 'underline',
		color: t.l('#7800a6', '#bdbdbd'),
		textShadow: t.l(null, '0.5px 0px 0px purple'),
		textDecorationColor: t.l('black', null),
		marginTop: 20,
		marginBottom: 10,
	},
	todoItem: {
		display: 'inline-block',
		fontSize: '2.4rem',
		marginBottom: 5,
		marginLeft: 5,
		textDecoration: (props: IProps) => (props.done ? 'line-through' : null),
		color: (props: IProps) => (props.done ? t.l('#5d5d5d', '#bdbdbd') : null),
		background: (props: IProps) => (props.done ? '#bdbdbd1f' : null),
		borderRadius: (props: IProps) => (props.done ? '8px' : null),
	},
	bullet: {
		minWidth: 12,
		maxWidth: 12,
		height: 12,
		borderRadius: '100%',
		background: t.l('#5d5d5d', '#bdbdbd'),
		marginTop: 12,
		marginRight: 10,
		marginLeft: 5,
	},
}))

const TodoPage = () => {
	return (
		<>
			<C>todo features</C>

			<I done>Set up MUI with tree-shaking</I>
			<I done>Profile Page</I>
			<I done>404 Page</I>
			<I done>Make everything Responsive</I>
			<I done>Routing and NavBar</I>
			<I done>Static site generation</I>
			<I done>Footer stick to bottom if content less than the page height</I>
			<I done>next-seo integration</I>
			<I done>add google analytics</I>
			<I done>theming functionality</I>
			<I done>dark mode functionality</I>
			<I done>migrate codebase to typescript</I>

			<C>other todos</C>
			<I>make todo page show up on dev environment only (pages.ts)</I>
		</>
	)
}

export default TodoPage

function C({ children }: { children: any }) {
	const s = useStyles()
	return (
		<>
			<div className={s.todoCategory}>{children}:</div>
		</>
	)
}

function I({ children, done = false }: { children: any; done?: boolean }) {
	const s = useStyles({ done })
	return (
		<>
			<Box display="flex">
				<Box className={s.bullet}></Box>{' '}
				<div className={s.todoItem}>{children}</div>
			</Box>
		</>
	)
}
