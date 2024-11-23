import HomeIcon from '@mui/icons-material/Home'
import { Box, Button, IconButton, Link, Typography } from '@mui/material'

const LicenseAccessError = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
			{/* Icona Home */}
			<Box sx={{ position: 'absolute', top: 10, left: 10 }}>
				<IconButton color="primary" aria-label="home">
					<HomeIcon fontSize="large" />
				</IconButton>
			</Box>

			{/* Contenitore circolare con "X" */}
			<Box
				sx={{
					width: 120,
					height: 120,
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#f44336', // Rosso per errore
					color: '#fff',
					marginTop: 6,
					marginBottom: 2
				}}>
				<Typography variant="h3" sx={{ fontWeight: 'bold' }}>
					X
				</Typography>
			</Box>

			{/* Testo "Attenzione!" */}
			<Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center' }}>
				Attenzione!
			</Typography>

			{/* Messaggio di errore */}
			<Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 4 }}>
				L'autista non può accedere al sito. Si prega di contattare l'assistenza per risolvere il problema.
			</Typography>

			{/* Bottone per richiedere assistenza */}
			<Button
				variant="contained"
				color="error"
				sx={{
					marginTop: 2,
					width: '90%',
					maxWidth: 400,
					padding: 1.5,
					borderRadius: 2,
					backgroundColor: '#d32f2f'
				}}>
				Richiedi Assistenza
			</Button>

			{/* Link per tornare alla home */}
			<Link href="/" sx={{ marginTop: 3, textDecoration: 'none', color: '#1976d2' }}>
				Torna alla Home
			</Link>
		</Box>
	)
}

export default LicenseAccessError
