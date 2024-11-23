import { readItems } from "@directus/sdk"
import { directusClient } from "App"

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
    directusClient.request(
		readItems('driver', {
			fields: ['id', 'licenseId', 'name', 'lastname', 'birthday', 'issueDate', 'validDate', 'blacklist'],
            filter: {
                license_id: {
                    _eq: licenseId
                }
            }
		})
	)
   
    
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

export async function fetchQuestions(): Promise<FetchQuestions[]> {
    const response = await directusClient.request(
			readItems('quiz', {
				fields: ['*']
			})
		) ?? []

	return response as FetchQuestions[]
}
