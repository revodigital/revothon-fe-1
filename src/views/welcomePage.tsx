import { Home as HomeIcon } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CustomTitle from './components/title'
import CustomButton from './components/Button'

const WelcomePage = () => {
	const navigate = useNavigate()

	const handleNavigate = () => {
		navigate('/language')
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
				background: 'linear-gradient(135deg, #FFD54F, #FF6F00)',
				color: 'white'
			}}>
			{/* Icona Home in alto a sinistra */}
			<Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
				<CustomButton text={<HomeIcon />} onClick={() => navigate('/')} />
			</Box>

			{/* Titolo Principale */}
			<CustomTitle text="🍕 Benvenuto nel Totem della Bontà! 🍔" />

			{/* Descrizione Simpatica */}
			<Box
				sx={{
					marginBottom: '40px',
					textAlign: 'center',
					maxWidth: '600px',
					lineHeight: '1.6',
					textShadow: '0px 2px 4px rgba(0,0,0,0.4)'
				}}>
				Ti trovi nel posto giusto per un'esperienza culinaria unica! <br />
				Che tu sia uno chef stellato o un campione nel bruciare toast, qui troverai qualcosa di speciale. <br /> Premi il pulsante
				qui sotto e preparati a un viaggio di sapori (e risate)!
			</Box>

			{/* Bottone per Proseguire */}
			<CustomButton text="🍴 Inizia l'avventura 🍴" onClick={handleNavigate} />
		</Box>
	)
}

export default WelcomePage
