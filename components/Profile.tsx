import React from 'react'
import ProfilePicture from './ProfilePicture'
import Box from '@material-ui/core/Box'
import Link from './Link'
import useStyles from './profileStyles'

const Profile = () => {
	const s = useStyles()
	return (
		<Box className={s.profileSectionCont}>
			<Box className={s.profileSection}>
				<ProfilePicture />
				<Box className={s.profileDetails}>
					<Box
						className={s.name}
						fontSize="2.8rem"
						fontFamily="Raleway"
						fontWeight={600}
					>
						Your Name
					</Box>

					<Box className={s.descrBox} ml={0.2}>
						<Box className={s.lineCont}>
							<svg
								className={s.svg}
								viewBox="0 0 12 16"
								width="16"
								height="24"
								aria-hidden="true"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
								></path>
							</svg>
							<Link href="#">Location</Link>
						</Box>
						<Box className={s.lineCont2}>
							<svg
								className={s.briefcaseSvg}
								width="20"
								height="24"
								viewBox="0 0 20 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.5 5C15.7692 5 17 5.00001 17 5.00001C17 5.00001 18.5 5 18.5 7.00001V15.5C18.5 16.5 18 17 17 17C16.2 17 8.33333 17 3.5 17C2.5 17 1.5 17 1.5 15.5C1.5 14.3 1.5 9.33333 1.5 6.5C1.5 5.27196 2.3 5 3.5 5C3.84949 5 4.72531 5 6.5 5M13.5 5C13.5 5 13.5 3.5 13.5 2.5C13.5 1.5 13 1 12 1C11 1 9 1 8 1C7 1 6.5 1.5 6.5 2.5C6.5 3.5 6.5 5 6.5 5M13.5 5C11.3109 5 8.62066 5 6.5 5"
									stroke="black"
									strokeWidth="1.5"
								/>
							</svg>
							<Link href="#">Company</Link>
						</Box>
					</Box>
					<Box display="flex" className={s.socialBoxes}>
						<Box className={s.socialIcon} id="linked-in">
							<Link href="#">
								<img
									className={s.socialSvg}
									src="/static/svgs/linkedin-brands.svg"
									alt="linked-in-profile"
								/>
							</Link>
						</Box>
						<Box className={s.socialIcon} id="github">
							<Link href="#">
								<img
									className={s.socialSvg}
									src="/static/svgs/github-square-brands.svg"
									alt="github-profile"
								/>
							</Link>
						</Box>
						<Box className={s.socialIcon} id="twitter">
							<Link href="#">
								<img
									className={s.socialSvg}
									src="/static/svgs/twitter-square-brands.svg"
									alt="twitter-profile"
								/>
							</Link>
						</Box>
						<Box className={s.socialIcon} id="mail-to">
							<Link href="mailto:hello@email.com?subject=yo!&body=Hi.">
								<span className={s.socialSvgMail}>
									<svg
										width="20"
										height="15"
										viewBox="0 0 20 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className={s.mailSvg}
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M1.76653 2.36559C1.7561 2.43827 1.75 2.52386 1.75 2.625V12.375C1.75 12.7052 1.80454 12.8838 1.85098 12.9754C1.89041 13.0532 1.93637 13.0949 2.00334 13.1292C2.20621 13.233 2.53056 13.25 3.11765 13.25H17.4118C17.8212 13.25 17.9915 13.1464 18.0666 13.0695C18.1448 12.9895 18.25 12.8053 18.25 12.375V3.16668C18.25 2.93329 18.228 2.74247 18.1937 2.5864L10.3729 7.06742C10.1375 7.20225 9.84775 7.19953 9.61499 7.06031L1.76653 2.36559ZM16.6363 1.75001L10.0082 5.54761L3.65945 1.75L16.6363 1.75001ZM17.4118 14.75H3.11765C3.09435 14.75 3.0704 14.75 3.04587 14.7501C2.5737 14.7509 1.88224 14.7521 1.32019 14.4646C0.990098 14.2957 0.705173 14.0327 0.512991 13.6535C0.327811 13.2881 0.25 12.8573 0.25 12.375V2.625C0.25 1.83004 0.501241 1.16715 1.09035 0.741763C1.67017 0.323085 2.43427 0.25 3.11765 0.25L17.4108 0.250011L17.4118 0.948206C17.4118 0.250011 17.4121 0.250011 17.4124 0.250011L17.4144 0.250015L17.4173 0.25003L17.4239 0.250098L17.4399 0.250436C17.4519 0.250771 17.4665 0.251352 17.4834 0.25234C17.5172 0.254311 17.5608 0.25792 17.6124 0.264496C17.715 0.277578 17.8526 0.302833 18.0097 0.352087C18.3238 0.450624 18.7309 0.650591 19.0768 1.05225C19.4907 1.53289 19.75 2.22341 19.75 3.16668V12.375C19.75 13.028 19.5905 13.6564 19.1393 14.118C18.685 14.5828 18.0612 14.75 17.4118 14.75Z"
											fill="black"
										/>
									</svg>
								</span>
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Profile
