import { Home as HomeIcon } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const WelcomePage = () => {
	const navigate = useNavigate() // Initialize useNavigate

	const handleNavigate = () => {
		navigate('/language') // Navigate to the "/language" route
	}

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px',
				background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
				color: 'white'
			}}>
			{/* Icona Home in alto a sinistra */}
			<Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
				<Button href="/">
					<HomeIcon sx={{ color: 'white' }} />
				</Button>
			</Box>

			{/* Messaggio di benvenuto */}
			<Typography
				variant="h3"
				sx={{
					fontWeight: 'bold',
					textAlign: 'center',
					marginBottom: '20px',
					textShadow: '0px 2px 4px rgba(0,0,0,0.4)'
				}}>
				Benvenuto!
			</Typography>

			<Typography
				variant="h6"
				sx={{
					marginBottom: '40px',
					textAlign: 'center',
					maxWidth: '500px',
					textShadow: '0px 1px 2px rgba(0,0,0,0.4)'
				}}>
				Sei pronto a iniziare? Clicca il pulsante qui sotto per continuare con la configurazione della lingua.
			</Typography>

			{/* Bottone per proseguire */}
			<Button
				variant="contained"
				color="secondary"
				onClick={handleNavigate} // Call the navigation function on click
				sx={{
					padding: '10px 20px',
					fontSize: '18px',
					fontWeight: 'bold',
					borderRadius: '30px',
					boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
					textTransform: 'none',
					backgroundColor: '#ff4081',
					'&:hover': {
						backgroundColor: '#f50057'
					}
				}}>
				Inizia
			</Button>
		</Box>
	)
}

export default WelcomePage
