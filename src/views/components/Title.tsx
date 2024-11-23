// components/CustomTitle.tsx
import React from 'react'
import { Typography } from '@mui/material'

interface CustomTitleProps {
	text: string
}

interface CustomDescriptionProps {
	text: string
}

const CustomTitle: React.FC<CustomTitleProps> = ({ text }) => {
	return (
		<Typography
			variant="h1"
			sx={{
				fontSize: '4rem', // Titolo molto grande
				fontWeight: 'bold',
				textAlign: 'center',
				marginBottom: '20px',
				textShadow: '0px 4px 8px rgba(0,0,0,0.5)',
				color: '#FFFFFF'
			}}>
			{text}
		</Typography>
	)
}

export const CustomDescription: React.FC<CustomDescriptionProps> = ({ text }) => {
	return (
		<Typography
			variant="h5"
			sx={{
				fontSize: '1.5rem',
				textAlign: 'center',
				marginBottom: '30px',
				color: '#FFFFFF',
				lineHeight: '1.8',
				textShadow: '0px 2px 4px rgba(0,0,0,0.4)',
				maxWidth: '600px'
			}}>
			{text}
		</Typography>
	)
}

export default CustomTitle
