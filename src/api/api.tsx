/* eslint-disable @typescript-eslint/naming-convention */
import { createItem, readItems, updateItem } from '@directus/sdk'
import { directusClient } from 'App'

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
	autistaId: number
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

function parseDriver(i: any): Driver {
	return {
		id: i.id,
		licenseId: i.license_id,
		name: i.name,
		lastname: i.last_name,
		birthday: '',
		validDate: i.valid_date,
		blacklist: i.blacklist
	}
}

export async function existDriver(licenseId: string): Promise<Driver | null> {
	const response = await directusClient.request(
		readItems('Drivers', {
			fields: ['*'],
			filter: {
				license_id: {
					_eq: licenseId
				}
			}
		})
	)

	if (response.length === 0) {
		return null
	}

	const rees = response.filter((e) => e.license_id === licenseId)

	console.log('rees', rees)

	if (rees.length === 0) {
		return null
	}

	return parseDriver(rees[0])
}

export async function createDriver({
	licenseId,
	name,
	lastname,
	birthday,
	issueDate,
	validDate,
	blacklist
}: CreateDriver): Promise<Driver> {
	const body = {
		license_id: licenseId,
		name,
		last_name: lastname,
		birthday,
		valid_date: validDate,
		blacklist
	}

	const response = (await directusClient.request(createItem('Drivers', body))) ?? []

	return response as Driver
}

export async function createLog({ autistaId, scan, enteredAt, exitAt, complete }: CreateLog): Promise<CreateLog> {
	const response =
		(await directusClient.request(
			createItem('logs', {
				autista_id: autistaId,
				entered_at: enteredAt,
				exit_at: exitAt,
				complete
			})
		)) ?? []

	return response as CreateLog
}

export async function updateStateLog(_id: number, complete: boolean): Promise<boolean> {
	await directusClient.request(
		updateItem('logs', _id, {
			complete
		})
	)
	return true
}

export async function fetchQuestions(): Promise<FetchQuestions[]> {
	const response =
		(await directusClient.request(
			readItems('quiz', {
				fields: ['*']
			})
		)) ?? []

	return response as FetchQuestions[]
}
