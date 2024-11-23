import HomeIcon from '@mui/icons-material/Home'
import { Box, Button, IconButton, Link, Typography } from '@mui/material'
import AWS from 'aws-sdk'
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { slsTextractOcrDevGetDocumentByFileName } from '../../api-read-license/client'

AWS.config.update({
	credentials: {
		accessKeyId: import.meta.env.VITE_ACCESS_KEY,
		secretAccessKey: import.meta.env.VITE_ACCESS_SECRET
	}
})

const buk = new AWS.S3({
	params: { Bucket: 'ocr-documents-revo-eni' },
	region: 'eu-west-1'
})

const LicensePlateReader = () => {
	const [loading, setLoading] = useState(false)
	const ref = React.useRef<any>(null)

	function urlFile(dataurl: any, filename: string) {
		const arr = dataurl.split(',')
		const mime = arr[0].match(/:(.*?);/)[1]
		const bstr = atob(arr[arr.length - 1])
		let n = bstr.length
		const u8arr = new Uint8Array(n)
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n)
		}
		return new File([u8arr], filename, { type: mime })
	}

	const capture = React.useCallback(async () => {
		const varA = ref.current?.getScreenshot()
		if (varA) {
			const date = new Date().getTime()
			const varB = urlFile(varA, `img-${date}.jpeg`)
			try {
				const params = {
					Body: varB,
					Bucket: 'ocr-documents-revo-eni',
					Key: `input/${varB.name}`
				}
				buk.putObject(params).send((err, data) => {
					if (err) console.log(err)
					if (data) console.log(data)
				})
				return varB
			} catch (error) {
				console.log('Error A')
			}
		} else {
			return undefined
		}
	}, [ref])

	const getFileWithRetry = async (key: any, maxRetries = 5, attempt = 1): Promise<any | undefined> => {
		try {
			if (attempt === 1) await new Promise((resolve) => setTimeout(resolve, 4))
			const ocrResponse = await slsTextractOcrDevGetDocumentByFileName({ path: { file: key } })
			if (!ocrResponse.data?.input) {
				if (attempt < maxRetries) {
					await new Promise((resolve) => setTimeout(resolve, 1000 * attempt))
					return getFileWithRetry(key, maxRetries, attempt + 1)
				}
				return undefined
			}
			return ocrResponse
		} catch (e: any) {
			if (attempt < maxRetries) {
				await new Promise((resolve) => setTimeout(resolve, 1000 * attempt))
				return getFileWithRetry(key, maxRetries, attempt + 1.5)
			}
			return undefined
		}
	}

	const handleClick = async () => {
		setLoading(true)
		const test = await capture()
		if (test) {
			const sn = test?.name.split('.')
			const res = await getFileWithRetry(sn[0])
			if (res) {
				/* Chiamata API */
			} else {
				/* Errore */
			}
		}
		setLoading(false)
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, position: 'relative', minHeight: '100vh' }}>
			<Box sx={{ position: 'absolute', top: 10, left: 10 }}>
				<IconButton color="primary" aria-label="home">
					<HomeIcon fontSize="large" />
				</IconButton>
			</Box>
			<Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>
				SCANSIONA LA PATENTE
			</Typography>
			<Typography variant="body1" sx={{ textAlign: 'center', marginBottom: 2 }}>
				Inquadra la patente con la webcam per scansionarla
			</Typography>
			<Box
				sx={{
					border: '2px solid #ccc',
					width: 400,
					height: 300,
					overflow: 'hidden',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 2,
					borderRadius: 2,
					backgroundColor: '#f9f9f9'
				}}
			>
				<Webcam
					audio={false}
					width={400}
					height={300}
					ref={ref}
					screenshotFormat="image/jpeg"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				/>
			</Box>
			<Box sx={{ marginTop: 'auto', textAlign: 'center', paddingBottom: 2 }}>
				<Button variant="contained" color="primary" onClick={handleClick} sx={{ marginBottom: 1 }}>
					Scansiona Ora
				</Button>
				<Typography variant="body2">
					<Link href="#" color="secondary" underline="hover">
						Richiedi aiuto ad un operatore
					</Link>
				</Typography>
			</Box>
		</Box>
	)
}

export default LicensePlateReader