import React, { useState } from 'react'
import { Box, Typography, Card, CardContent, Button } from '@mui/material'
import CustomDialog from 'views/components/dialog'
import CustomButton from 'views/components/Button'
import CustomTitle from 'views/components/title'
import { useNavigate } from 'react-router-dom'

const LanguageSelectionPage: React.FC = () => {
	const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
	const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
	const [dialogMessage, setDialogMessage] = useState<string>('')

	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/scan')
	}

	const languages = [
		{ code: 'it', name: 'Italiano', emoji: '🇮🇹', message: 'Perfetto! Sarà tutto in italiano!' },
		{ code: 'en', name: 'Inglese', emoji: '🇬🇧', message: 'Che bella lingua! Ma promuoviamo l’italiano. Sarà tutto in italiano!' },
		{ code: 'fr', name: 'Francese', emoji: '🇫🇷', message: 'Purtroppo il francese non è ammesso. Riprova con un’altra lingua!' },
		{ code: 'es', name: 'Spagnolo', emoji: '🇪🇸', message: 'Fantastico! Ma il nostro cuore è italiano. Sarà tutto in italiano!' },
		{ code: 'de', name: 'Tedesco', emoji: '🇩🇪', message: 'Che lingua precisa! Ma andremo avanti in italiano.' },
		{ code: 'jp', name: 'Giapponese', emoji: '🇯🇵', message: 'Incredibile scelta! Ma preferiamo continuare in italiano.' },
		{ code: 'kr', name: 'Coreano', emoji: '🇰🇷', message: 'Ottima scelta, ma siamo qui per promuovere l’italiano!' },
		{ code: 'zh', name: 'Cinese', emoji: '🇨🇳', message: 'Una lingua bellissima, ma resteremo in italiano!' },
		{ code: 'ru', name: 'Russo', emoji: '🇷🇺', message: 'Una lingua interessante! Ma torniamo all’italiano.' },
		{ code: 'ar', name: 'Arabo', emoji: '🇸🇦', message: 'Bellissima scelta, ma promuoviamo l’italiano!' },
		{ code: 'pt', name: 'Portoghese', emoji: '🇵🇹', message: 'Fantastico! Ma l’italiano rimane al centro della scena.' },
		{ code: 'gr', name: 'Greco', emoji: '🇬🇷', message: 'Una lingua antica e meravigliosa! Ma useremo l’italiano.' },
		{ code: 'tr', name: 'Turco', emoji: '🇹🇷', message: 'Scelta unica! Ma ci focalizzeremo sull’italiano.' },
		{ code: 'nl', name: 'Olandese', emoji: '🇳🇱', message: 'Molto interessante! Tuttavia, useremo l’italiano.' },
		{ code: 'sv', name: 'Svedese', emoji: '🇸🇪', message: 'Una lingua fresca! Ma sarà tutto in italiano.' },
		{ code: 'no', name: 'Norvegese', emoji: '🇳🇴', message: 'Bella scelta, ma ci concentreremo sull’italiano.' },
		{ code: 'da', name: 'Danese', emoji: '🇩🇰', message: 'Splendido! Ma utilizzeremo l’italiano.' },
		{ code: 'pl', name: 'Polacco', emoji: '🇵🇱', message: 'Un’ottima lingua! Ma torniamo all’italiano.' },
		{ code: 'fi', name: 'Finlandese', emoji: '🇫🇮', message: 'Una scelta curiosa! Tuttavia, useremo l’italiano.' },
		{ code: 'cz', name: 'Ceco', emoji: '🇨🇿', message: 'Una lingua fantastica! Ma promuoviamo l’italiano.' },
		{ code: 'hu', name: 'Ungherese', emoji: '🇭🇺', message: 'Grande scelta! Ma proseguiamo con l’italiano.' }
	]

	const handleLanguageSelection = (code: string) => {
		setSelectedLanguage(code)
	}

	const handleNext = () => {
		const selected = languages.find((lang) => lang.code === selectedLanguage)
		if (selected) {
			setDialogMessage(selected.message)
			setIsDialogOpen(true)
		}
	}

	const handleCloseDialog = () => {
		setIsDialogOpen(false)
		handleNavigate()
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
				background: 'linear-gradient(135deg, #FFD54F, #FF6F00)'
			}}>
			{/* Titolo Principale */}
			<CustomTitle text="🌍 Seleziona la tua lingua preferita! 🌍" />

			{/* Cards per le lingue */}
			<Box
				sx={{
					marginTop: '50px',
					display: 'flex',
					justifyContent: 'center',
					gap: '20px',
					flexWrap: 'wrap',
					maxWidth: '900px'
				}}>
				{languages.map((language) => (
					<Card
						key={language.code}
						onClick={() => handleLanguageSelection(language.code)}
						sx={{
							width: '150px',
							height: '150px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: selectedLanguage === language.code ? '#FF7043' : '#FFF3E0',
							cursor: 'pointer',
							border: selectedLanguage === language.code ? '4px solid #FF5722' : '2px solid #FFD54F',
							borderRadius: '16px',
							boxShadow: '0px 6px 15px rgba(0,0,0,0.3)',
							transition: 'all 0.3s ease',
							'&:hover': {
								transform: 'scale(1.1)',
								boxShadow: '0px 8px 20px rgba(0,0,0,0.5)'
							}
						}}>
						<CardContent>
							<Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
								{language.emoji}
							</Typography>
							<Typography variant="body1" sx={{ textAlign: 'center', marginTop: '10px', color: '#000' }}>
								{language.name}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>

			{/* Bottone per proseguire */}
			<Button
				onClick={handleNext}
				disabled={!selectedLanguage}
				variant="contained"
				sx={{
					marginTop: '90px',
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
				Avanti
			</Button>

			{/* Dialog personalizzato */}
			<CustomDialog open={isDialogOpen} title="Bella lingua!" message={dialogMessage} onClose={handleCloseDialog} />
		</Box>
	)
}

export default LanguageSelectionPage
