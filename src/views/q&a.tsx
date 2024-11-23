import { Home as HomeIcon } from '@mui/icons-material'
import {
	Alert,
	Box,
	Button,
	Card,
	CardContent,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Typography
} from '@mui/material'
import { directusClient } from 'App'
import { FetchQuestions, fetchQuestions } from 'api/api'
import { useEffect, useState } from 'react'
import CustomTitle from './components/title'
import CustomButton from './components/Button'

const QAPage = () => {
	const [questions, setQuestions] = useState<FetchQuestions[]>([])
	const [answers, setAnswers] = useState<{ [key: number]: string }>({})
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		const loadQuestions = async () => {
			await directusClient.login(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PASSWORD)
			const data = await fetchQuestions()
			setQuestions(data)
		}
		loadQuestions()
	}, [])

	const handleChange = (questionId: number, answer: string) => {
		setAnswers((prev) => ({
			...prev,
			[questionId]: answer
		}))
		setErrorMessage('') // Rimuove il messaggio di errore quando l'utente cambia risposta
	}

	const handleNext = () => {
		const currentQuestion = questions[currentQuestionIndex]

		// Controlla se la risposta selezionata è corretta
		console.log(answers[currentQuestion.id])
		console.log(currentQuestion.right_answer)
		if (answers[currentQuestion.id] !== currentQuestion.right_answer) {
			setErrorMessage('La risposta è sbagliata. Prova di nuovo!')
			return
		}

		// Vai avanti se la risposta è corretta
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1)
		} else {
			// Logica finale: invio risposte o navigazione
			console.log('Risposte inviate:', answers)
			// navigate('/results')
		}
	}

	if (questions.length === 0) {
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
				<Typography color="white" fontSize={30}>
					Caricamento domande...
				</Typography>
			</Box>
		)
	}

	const currentQuestion = questions[currentQuestionIndex]

	function Quiz() {
		return `Step ${currentQuestionIndex + 1}/${questions.length}`
	}
	function Quiz2() {
		return `${currentQuestionIndex < questions.length - 1 ? 'Avanti' : 'Invia'}`
	}
	// eslint-disable-next-line consistent-return
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
			{/* Icona Home */}
			{/* <Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
				<Button href="/">
					<HomeIcon />
				</Button>
			</Box> */}

			{/* Contenitore per la domanda */}
			<Box sx={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{/* Step */}

				<CustomTitle text={Quiz()} />

				{/* Titolo Principale */}
				{/* Domanda */}
				<FormControl component="fieldset" sx={{ width: '80%' }}>
					<FormLabel component="legend">{currentQuestion.question}</FormLabel>
					<RadioGroup
						value={answers[currentQuestion.id] || ''}
						onChange={(event) => handleChange(currentQuestion.id, event.target.value)}>
						{/* Risposte */}
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value={'answer_a'} control={<Radio />} label={currentQuestion.answer_a} />
							</CardContent>
						</Card>
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value={'answer_b'} control={<Radio />} label={currentQuestion.answer_b} />
							</CardContent>
						</Card>
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value={'answer_c'} control={<Radio />} label={currentQuestion.answer_c} />
							</CardContent>
						</Card>
					</RadioGroup>
				</FormControl>

				{/* Messaggio di errore */}
				{errorMessage && (
					<Alert severity="error" sx={{ marginTop: '20px', width: '80%' }}>
						{errorMessage}
					</Alert>
				)}

				{/* Bottone Avanti */}
				<CustomButton text={Quiz2()} onClick={handleNext} />
			</Box>
		</Box>
	)
}

export default QAPage
