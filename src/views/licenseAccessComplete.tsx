import { Home as HomeIcon } from '@mui/icons-material'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SuccessPage = () => {
	const [seconds, setSeconds] = useState(15)

	// Timer countdown per il reindirizzamento
	useEffect(() => {
		if (seconds > 0) {
			const timer = setInterval(() => {
				setSeconds((prevSeconds) => prevSeconds - 1)
			}, 1000)
			return () => clearInterval(timer) // pulisci il timer quando il componente viene smontato
		}
	}, [seconds])

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '20px'
			}}>
			{/* Icona Home in alto a sinistra */}
			<Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
				<Button href="/">
					<HomeIcon />
				</Button>
			</Box>

			{/* Contenitore per il V */}
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
				<Box
					sx={{
						width: '100px',
						height: '100px',
						borderRadius: '50%',
						backgroundColor: '#4caf50',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
						fontSize: '50px',
						fontWeight: 'bold'
					}}>
					V
				</Box>
			</Box>

			{/* Messaggio di congratulazioni */}
			<Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
				Complimenti!
			</Typography>

			<Typography variant="h6" sx={{ marginBottom: '20px' }}>
				Hai completato correttamente la procedura.
			</Typography>

			{/* Timer */}
			<Typography variant="body1" sx={{ marginBottom: '20px' }}>
				Tornerai alla home tra {seconds} secondi.
			</Typography>

			{/* Link per tornare alla home */}
			<Button variant="contained" color="primary" component={Link} to="/" sx={{ marginBottom: '20px' }}>
				Torna alla Home
			</Button>

			{/* Timer visivo (circolare) */}
			<CircularProgress variant="determinate" value={(15 - seconds) * (100 / 15)} sx={{ marginTop: '20px' }} />
		</Box>
	)
}

export default SuccessPage
