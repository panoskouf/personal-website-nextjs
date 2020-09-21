import React from 'react'
import { NextSeo } from 'next-seo'
import ProfileLayout from '../components/ProfileLayout'
import AboutPage from '../components/AboutPage'

const Index = () => (
	<>
		<NextSeo title="website title" description="My personal website" />
		<ProfileLayout>
			<AboutPage />
		</ProfileLayout>
	</>
)

export default Index
