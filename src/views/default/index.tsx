import { Box, Button, Card, CardContent, Checkbox, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Tipo per definire le lingue
interface Language {
	id: string
	name: string
	abbreviation: string
}

const languages = [
	{ id: 'en', name: 'Inglese', abbreviation: 'EN' },
	{ id: 'it', name: 'Italiano', abbreviation: 'IT' },
	{ id: 'fr', name: 'Francese', abbreviation: 'FR' },
	{ id: 'es', name: 'Spagnolo', abbreviation: 'ES' }
]

const LanguageSelection: React.FC<{}> = () => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/scan')
	}

	const [selectedLanguages, setSelectedLanguages] = React.useState<string[]>([])

	const handleLanguageChange = (id: string) => {
		setSelectedLanguages((prev) => (prev.includes(id) ? prev.filter((lang) => lang !== id) : [...prev, id]))
	}

	const handleNext = () => {
		console.log('Lingue selezionate:', selectedLanguages)
	}

	return (
		<Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			{/* Titolo */}
			<Typography
				variant="h4"
				component="h1"
				align="center"
				sx={{ margin: '30px auto', fontWeight: 'bold', fontSize: '70px', color: 'red' }}>
				Scegli la lingua
			</Typography>

			{/* Lista delle lingue */}
			<Box flex="1" overflow="auto" mt={2}>
				<Grid container spacing={2}>
					{languages.map((language) => (
						<Grid item xs={6} key={language.id}>
							<Card
								sx={{
									margin: '30px auto',
									textAlign: 'center',
									padding: 2,
									borderRadius: 2,
									boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
									transition: 'transform 0.2s, box-shadow 0.2s',
									'&:hover': {
										transform: 'scale(1.05)',
										boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
									}
								}}>
								<CardContent>
									<Checkbox
										checked={selectedLanguages.includes(language.id)}
										onChange={() => handleLanguageChange(language.id)}
										sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
									/>
									<Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mt: 1 }}>
										{language.name}
									</Typography>
									<Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', marginTop: '4px' }}>
										{language.abbreviation.toUpperCase()}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>

			{/* Bottone finale */}
			<Box mt={3} mb={2}>
				<Button
					variant="contained"
					color="primary"
					size="large"
					onClick={handleNavigate}
					disabled={selectedLanguages.length === 0}
					sx={{
						width: '100%',
						padding: '12px',
						fontWeight: 'bold',
						borderRadius: 2
					}}>
					Avanti
				</Button>
			</Box>
		</Container>
	)
}

export default LanguageSelection
