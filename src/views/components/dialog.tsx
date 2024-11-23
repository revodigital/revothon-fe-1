// components/CustomDialog.tsx
import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'

interface CustomDialogProps {
	open: boolean
	title: string
	message: string
	onClose: () => void
}

const CustomDialog: React.FC<CustomDialogProps> = ({ open, title, message, onClose }) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			sx={{
				'& .MuiDialog-paper': {
					background: 'linear-gradient(135deg, #FFD54F, #FF7043)',
					color: '#fff',
					borderRadius: '20px',
					boxShadow: '0px 6px 15px rgba(0,0,0,0.5)',
					padding: '20px'
				}
			}}>
			<DialogTitle>
				<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
					{title}
				</Typography>
			</DialogTitle>
			<DialogContent>
				<Typography variant="body1" sx={{ textAlign: 'left', lineHeight: '1.8', fontSize: '22px', color: 'black' }}>
					{message}
				</Typography>
			</DialogContent>
			<DialogActions sx={{ justifyContent: 'center' }}>
				<Button
					onClick={onClose}
					variant="contained"
					sx={{
						fontWeight: 'bold',
						fontSize: '16px',
						backgroundColor: '#FF5722',
						color: '#fff',
						width: '100%',
						padding: '15px 30px',
						borderRadius: '30px',
						'&:hover': {
							backgroundColor: '#D84315'
						}
					}}>
					YEEEEE
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default CustomDialog
