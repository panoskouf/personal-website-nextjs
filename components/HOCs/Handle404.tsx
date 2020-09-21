import React from 'react'
import Layout from '../Layout'
import P404 from '../P404'
import { blockedRoutes } from '../../configs/pages'

export default function Handle404(WrappedComponent, route) {
	return blockedRoutes.includes(route) ? (
		<Layout>
			<P404 />
		</Layout>
	) : (
		<WrappedComponent />
	)
}
