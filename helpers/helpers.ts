/* Gtag Manager */
function trackPageView(url: string) {
	try {
		;(<any>window).gtag('config', 'UA-XXXXXXXXX-X', {
			page_location: url,
		})
	} catch (error) {
		// silences the error in dev mode
		// and/or if gtag fails to load
	}
}

/* JS Helpers */
function expand(obj: object) {
	var keys = Object.keys(obj)
	for (var i = 0; i < keys.length; ++i) {
		var key = keys[i],
			subkeys = key.split(/,\s?/),
			target = obj[key]
		delete obj[key]
		subkeys.forEach(function (key) {
			obj[key] = target
		})
	}
	return obj
}

export { expand, trackPageView }
