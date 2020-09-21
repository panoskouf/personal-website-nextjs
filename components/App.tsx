/*  globals localStorage  */
import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Head from 'next/head'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeContext from '../configs/themeContext'
import themes from '../configs/theming'
import SEO from '../next-seo.config'
import { trackPageView } from '../helpers/helpers'

function MyApp({ children }: any) {
	const [themeState, setThemeState] = useState({
		theme:
			global.localStorage && localStorage.getItem('theme') === 'dark'
				? themes.dark
				: themes.light,
		/* context below */
		darkMode: global.localStorage && localStorage.getItem('theme') === 'dark',
	})

	const toggleTheme = () => {
		localStorage.setItem('theme', themeState.darkMode ? 'light' : 'dark')
		setThemeState((prevState) => ({
			darkMode: !prevState.darkMode,
			theme: !prevState.darkMode ? themes.dark : themes.light,
		}))
	}

	useEffect(() => {
		console.log(
			'%c  🙈 looks like, you can find anywhere some 💓',
			'background: rgb(34,193,195); background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(177,45,253,1) 100%); color: #BFC6CF; font-weight: bold; font-size: 16px;'
		)
		if (process.env.NODE_ENV !== 'production') {
			const axe = require('react-axe')
			axe(React, ReactDom, 1000)
		} else {
			if (Router.hasOwnProperty('onRouteChangeComplete') === false) {
				Object.defineProperty(Router, 'onRouteChangeComplete', () => {})
			}
			Router.events.on('routeChangeComplete', (url) => {
				trackPageView(url)
			})
		}

		return () => {
			Router.events.off('routeChangeComplete', () => {
				/*noop */
			})
		}
	}, [])

	return (
		<>
			<DefaultSeo {...SEO} />
			<Head>
				<title>website title</title>
			</Head>
			<ThemeProvider theme={themeState.theme}>
				<ThemeContext.Provider
					value={{ darkMode: themeState.darkMode, toggleTheme }}
				>
					<CssBaseline>{children}</CssBaseline>
				</ThemeContext.Provider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
