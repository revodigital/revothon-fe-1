import { Home as HomeIcon } from '@mui/icons-material'
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

const QAPage = () => {
	const [selectedAnswer, setSelectedAnswer] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedAnswer(event.target.value)
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
				padding: '20px'
			}}>
			{/* Icona Home in alto a sinistra */}
			<Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
				<Button href="/">
					<HomeIcon />
				</Button>
			</Box>

			{/* Contenitore per la domanda e le risposte */}
			<Box sx={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{/* Step 1/n */}
				<Typography variant="h6" color="textSecondary" sx={{ marginBottom: '10px' }}>
					Step 1/n
				</Typography>

				{/* Gruppo di Risposte */}
				<FormControl component="fieldset" sx={{ width: '80%' }}>
					<FormLabel component="legend">Seleziona la tua data di nascita</FormLabel>
					<RadioGroup value={selectedAnswer} onChange={handleChange}>
						{/* Card 1 */}
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value="01/01/1990" control={<Radio />} label="01/01/1990" />
							</CardContent>
						</Card>

						{/* Card 2 */}
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value="15/03/1985" control={<Radio />} label="15/03/1985" />
							</CardContent>
						</Card>

						{/* Card 3 */}
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value="23/07/1995" control={<Radio />} label="23/07/1995" />
							</CardContent>
						</Card>
					</RadioGroup>
				</FormControl>

				{/* Bottone Avanti */}
				<Button variant="contained" color="primary" href="/next-step" sx={{ marginTop: '20px' }}>
					Avanti
				</Button>
			</Box>
		</Box>
	)
}

export default QAPage
