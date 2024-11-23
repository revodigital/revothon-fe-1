// components/CustomButton.tsx
import React from 'react'
import { Button } from '@mui/material'

interface CustomButtonProps {
	text: string
	onClick: () => void
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
	return (
		<Button
			variant="contained"
			onClick={onClick}
			sx={{
				fontSize: '24px', // Testo più grande
				padding: '20px 40px', // Pulsanti più grandi
				borderRadius: '40px',
				fontWeight: 'bold',
				textTransform: 'none',
				backgroundColor: '#FF7043',
				boxShadow: '0px 6px 15px rgba(0,0,0,0.3)',
				'&:hover': {
					backgroundColor: '#FF5722'
				}
			}}>
			{text}
		</Button>
	)
}

export default CustomButton
