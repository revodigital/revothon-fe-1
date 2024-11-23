import HomeIcon from '@mui/icons-material/Home'
import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material'

const LicenseScanResult = ({ licenseData }) => {
	// Simulazione dati provenienti dal back-end
	const data = licenseData || {
		license_id: 'ABC12345',
		name: 'Andrea',
		last_name: 'Gulli',
		valid_date: '2026-12-31'
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
			{/* Icona Home */}
			<Box sx={{ position: 'absolute', top: 10, left: 10 }}>
				<IconButton color="primary" aria-label="home">
					<HomeIcon fontSize="large" />
				</IconButton>
			</Box>

			{/* Contenitore circolare con "V" */}
			<Box
				sx={{
					width: 120,
					height: 120,
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#4caf50',
					color: '#fff',
					marginTop: 6,
					marginBottom: 2
				}}>
				<Typography variant="h3" sx={{ fontWeight: 'bold' }}>
					V
				</Typography>
			</Box>

			{/* Testo "Scansione eseguita" */}
			<Typography variant="h5" sx={{ marginBottom: 4, textAlign: 'center' }}>
				Scansione Eseguita
			</Typography>

			{/* Card con i dati */}
			<Card sx={{ width: '90%', maxWidth: 400, padding: 2, borderRadius: 2, boxShadow: 3 }}>
				<Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}>
					Dati Patente
				</Typography>
				<CardContent>
					<Box sx={{ marginBottom: 2 }}>
						<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
							License ID:
						</Typography>
						<Typography variant="body1">{data.license_id}</Typography>
					</Box>
					<Box sx={{ marginBottom: 2 }}>
						<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
							Nome:
						</Typography>
						<Typography variant="body1">{data.name}</Typography>
					</Box>
					<Box sx={{ marginBottom: 2 }}>
						<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
							Cognome:
						</Typography>
						<Typography variant="body1">{data.last_name}</Typography>
					</Box>
					<Box>
						<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
							Validità:
						</Typography>
						<Typography variant="body1">{data.valid_date}</Typography>
					</Box>
				</CardContent>
			</Card>

			{/* Bottone Avanti */}
			<Button variant="contained" color="primary" sx={{ marginTop: 4, width: '90%', maxWidth: 400, padding: 1.5, borderRadius: 2  }}>
				Avanti
			</Button>
		</Box>
	)
}

export default LicenseScanResult
