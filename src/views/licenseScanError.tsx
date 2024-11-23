import { Home as HomeIcon } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

const ScanErrorPage = () => {
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

			{/* Contenitore per l'errore */}
			<Box sx={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{/* Cerchio con la X */}
				<Box
					sx={{
						width: '100px',
						height: '100px',
						borderRadius: '50%',
						backgroundColor: 'red',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: '20px'
					}}>
					<Typography sx={{ fontSize: '50px', color: 'white', fontWeight: 'bold' }}>X</Typography>
				</Box>

				{/* Messaggio di errore */}
				<Typography variant="h5" color="error" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
					Attenzione!
				</Typography>
				<Typography variant="body1" color="textSecondary" sx={{ marginBottom: '30px' }}>
					Non è stato possibile scansionare la patente.
				</Typography>

				{/* Bottone per ripetere la scansione */}
				<Button variant="contained" color="primary" sx={{ marginBottom: '10px' }} href="/scansione">
					Ripeti Scansione
				</Button>

				{/* Link per richiedere assistenza */}
				<Typography variant="body2" color="textSecondary">
					Hai bisogno di aiuto?{' '}
					<Button href="/richiedi-assistenza" sx={{ textTransform: 'none' }}>
						Richiedi Assistenza
					</Button>
				</Typography>
			</Box>
		</Box>
	)
}

export default ScanErrorPage
