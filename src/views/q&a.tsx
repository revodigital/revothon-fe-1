import { Home as HomeIcon } from '@mui/icons-material'
import { Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { directusClient } from 'App'
import { FetchQuestions, fetchQuestions } from 'api/api'
import { useEffect, useState } from 'react'


const QAPage = () => {
	const [questions, setQuestions] = useState<FetchQuestions[]>([])
	const [answers, setAnswers] = useState<{ [key: number]: string }>({})
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

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
	}

	const handleNext = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1)
		} else {
			// Logica finale: invio risposte o navigazione
			console.log('Risposte inviate:', answers)
			// Esempio: navigazione a una nuova pagina
			// navigate('/results')
		}
	}

	if (questions.length === 0) {
		return <Typography>Caricamento domande...</Typography>
	}

	const currentQuestion = questions[currentQuestionIndex]

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
			{/* Icona Home */}
			<Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
				<Button href="/">
					<HomeIcon />
				</Button>
			</Box>

			{/* Contenitore per la domanda */}
			<Box sx={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{/* Step */}
				<Typography variant="h6" color="textSecondary" sx={{ marginBottom: '10px' }}>
					Step {currentQuestionIndex + 1}/{questions.length}
				</Typography>

				{/* Domanda */}
				<FormControl component="fieldset" sx={{ width: '80%' }}>
					<FormLabel component="legend">{currentQuestion.question}</FormLabel>
					<RadioGroup
						value={answers[currentQuestion.id] || ''}
						onChange={(event) => handleChange(currentQuestion.id, event.target.value)}>
						{/* Risposte */}
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value={currentQuestion.answer_a} control={<Radio />} label={currentQuestion.answer_a} />
							</CardContent>
						</Card>
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value={currentQuestion.answer_b} control={<Radio />} label={currentQuestion.answer_b} />
							</CardContent>
						</Card>
						<Card sx={{ width: '100%', marginBottom: '20px', borderRadius: '10px', boxShadow: 3, backgroundColor: '#f5f5f5' }}>
							<CardContent sx={{ display: 'flex', alignItems: 'center' }}>
								<FormControlLabel value={currentQuestion.answer_c} control={<Radio />} label={currentQuestion.answer_c} />
							</CardContent>
						</Card>
					</RadioGroup>
				</FormControl>

				{/* Bottone Avanti */}
				<Button variant="contained" color="primary" onClick={handleNext} sx={{ marginTop: '20px' }}>
					{currentQuestionIndex < questions.length - 1 ? 'Avanti' : 'Invia'}
				</Button>
			</Box>
		</Box>
	)
}

export default QAPage
