const isProduction = process.env.NODE_ENV === 'production'

/* not allowed in production */
// const devOnly = ['todo']
const devOnly = []
const blockedRoutes = !isProduction ? [] : devOnly

function routeAllowed(route: string) {
	return !blockedRoutes.includes(route)
}

export { blockedRoutes, routeAllowed }
