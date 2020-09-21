import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import { Fragment } from 'react'
/* https://www.garymeehan.ie/blog/google-analytics-nextjs-and-prismic */

/* implement production flag */
const isProduction = process.env.NODE_ENV === 'production'

class MyDocument extends Document {
	setGoogleTags() {
		return {
			__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-XXXXXXXXX-X');
    `,
		}
	}

	render() {
		return (
			<html lang="en-GB">
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="icon" href="favicons/favicon.ico" />
					<link
						rel="preload"
						href="https://fonts.googleapis.com/css?family=Montserrat|Raleway"
						as="style"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Raleway:400,600&display=swap"
						rel="stylesheet"
					/>
					{isProduction && (
						<Fragment>
							<script
								async
								src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"
							></script>
							<script dangerouslySetInnerHTML={this.setGoogleTags()} />
						</Fragment>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			<React.Fragment key="styles">
				{initialProps.styles}
				{sheets.getStyleElement()}
			</React.Fragment>,
		],
	}
}

export default MyDocument
