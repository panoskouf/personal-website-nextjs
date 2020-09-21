import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Link from './Link'
import { ExtendedTheme } from '../configs/theming'

const useStyles = makeStyles((t: ExtendedTheme) => ({
	infoBox: {
		fontSize: '2rem',
		borderRadius: 8,
		'& br': { display: 'none' },
	},
}))

const AboutPage = () => {
	const s = useStyles()
	return (
		<>
			<Box className={s.infoBox} textAlign="left">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
				debitis sint dolores voluptas qui dolor ratione nisi minima nostrum,
				assumenda eligendi maiores repudiandae impedit totam! Incidunt ipsum
				consequatur reprehenderit soluta alias praesentium. Temporibus
				accusantium minima dolore labore, maiores illo alias similique porro
				reprehenderit. Eos, veritatis voluptatibus quasi quia enim libero
				tempore consequatur sed ratione eum reiciendis? Distinctio error odio
				perferendis, ducimus animi deleniti laborum assumenda{' '}
				<Link href="#some-random-link">Lorem, ipsum dolor.</Link> architecto
				vero exercitationem molestiae porro eveniet quae molestias autem dolor
				vel! Repudiandae laudantium similique corporis porro reprehenderit optio
				nemo sapiente earum repellendus tenetur doloremque odit ad unde
				praesentium neque, minus delectus cum id aut recusandae. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Recusandae, atque. <br />{' '}
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Quas consequuntur excepturi
				hic deleniti enim quos nihil magni provident voluptatibus! Dignissimos
				quas nam, magni neque a itaque, accusamus sed vel soluta, aspernatur
				adipisci. Ullam voluptatibus voluptatem modi voluptatum? Cumque eius
				sed, facere repellat cupiditate necessitatibus dignissimos quis minus
				quod blanditiis labore id totam reprehenderit consectetur molestiae a
				debitis quos excepturi.
			</Box>
		</>
	)
}

export default AboutPage
