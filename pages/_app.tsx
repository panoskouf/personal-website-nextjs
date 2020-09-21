import App from 'next/app'
import MyApp from '../components/App'

export default class NextApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<MyApp>
				<Component {...pageProps} />
			</MyApp>
		)
	}
}
