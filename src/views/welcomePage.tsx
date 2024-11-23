import { Home as HomeIcon } from '@mui/icons-material'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CustomTitle, { CustomDescription } from './components/title'
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

			{/* Descrizione Simpatica */}
			<CustomDescription
				text="Ti trovi nel posto giusto per un'esperienza culinaria unica! 
        Che tu sia uno chef stellato o un campione nel bruciare toast, qui troverai qualcosa di speciale. 
        Premi il pulsante qui sotto e preparati a un viaggio di sapori (e risate)!"
			/>

			{/* Bottone per Proseguire */}
			<CustomButton text="🍴 Inizia l'avventura 🍴" onClick={handleNavigate} />
		</Box>
	)
}

export default WelcomePage
