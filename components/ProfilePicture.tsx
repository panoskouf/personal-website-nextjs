import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	pictureContainer: {
		position: 'relative',
		height: 210,
		width: 210,
		border: t.l(null, '1px solid #454c56'),
		borderRadius: 20,
		margin: '6px 0',
		backgroundSize: 'contain',
		overflow: 'hidden',
	},
	img: {
		maxWidth: '100%',
		minHeight: '100%',
		borderRadius: 20,
		position: 'relative',
		top: 0,
		left: 0,
	},
	imgShadow: {
		display: t.d('none', null),
		position: 'absolute',
		width: '100%',
		height: '100%',
		boxShadow: '0 0 8px 1px black inset',
		top: 0,
		left: 0,
	},
	[t.max('lg')]: {
		pictureContainer: {
			height: 180,
			width: 180,
			minWidth: 180,
		},
	},
	'@media (max-width: 460px)': {
		pictureContainer: {
			height: 'auto',
			width: 'auto',
			minWidth: 'unset',
			border: '1px solid transparent',
		},
	},
	[t.max('sm')]: {
		pictureContainer: {
			height: 145,
			width: 145,
		},
	},
}))

const ProfilePicture = () => {
	const s = useStyles()

	return (
		<div className={s.pictureContainer}>
			<img
				className={s.img}
				src="https://source.unsplash.com/random/210x210"
				alt="profile-pic"
			/>
			<div className={s.imgShadow}></div>
		</div>
	)
}

export default ProfilePicture
