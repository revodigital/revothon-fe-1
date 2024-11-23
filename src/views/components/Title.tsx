// components/CustomTitle.tsx
import React from 'react'
import { Typography } from '@mui/material'

interface CustomTitleProps {
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

export default CustomTitle
