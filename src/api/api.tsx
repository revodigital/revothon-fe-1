export interface CreateDriver {
	licenseId: string
	name: string
	lastname: string
	birthday: string
	issueDate?: string
	validDate: string
	blacklist: boolean
}


export interface CreateLog {
	autistaId: string
	scan?: string
	enteredAt?: Date
	exitAt?: Date
	complete: boolean
}

export interface FetchQuestions {
    id: number
    question: string
    answer_a: string
    answer_b: string
    answer_c: string
    right_answer: string
}
export interface Driver {
    id: number
    licenseId: string
    name: string
    lastname: string
    birthday: string
    issueDate?: string
    validDate: string
    blacklist: boolean
}


export function existDriver(licenseId: string): Driver {
	return {
		id: 1,
		licenseId: 'XXXXXXXXX',
		name: 'Juan',
		lastname: 'Perez',
		birthday: '1990-01-01',
		issueDate: '2020-01-01',
		validDate: '2020-01-01',
		blacklist: false
	}
}

export function createDriver({ licenseId, name, lastname, birthday, issueDate, validDate, blacklist }: CreateDriver): boolean {
	return true
}

export function createLog({ autistaId, scan, enteredAt, exitAt, complete }: CreateLog): boolean {
	return true
}

export function updateStateLog(complete: boolean): boolean {
	return true
}

export function fetchQuestions(): FetchQuestions[] {
	return [
		{
			id: 1,
			question: '¿Cuál es el nombre de tu mascota?',
			answer_a: 'A',
			answer_b: 'B',
			answer_c: 'C',
			right_answer: 'A'
		},
		{
			id: 1,
			question: '¿Cuál es el nombre de tu mascota?',
			answer_a: 'A',
			answer_b: 'B',
			answer_c: 'C',
			right_answer: 'A'
		},
		{
			id: 1,
			question: '¿Cuál es el nombre de tu mascota?',
			answer_a: 'A',
			answer_b: 'B',
			answer_c: 'C',
			right_answer: 'A'
		}
	]
}
