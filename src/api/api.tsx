import { createItem, readItems, updateItem } from "@directus/sdk"
import { directusClient } from "App"

export interface CreateDriver {
	licenseId: string
	name: string
	lastname: string
	birthday?: string
	issueDate?: string
	validDate: string
	blacklist?: boolean
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


export async function existDriver(licenseId: string): Promise<Driver | null> {
     const response = await directusClient.request(
			readItems('Drivers', {
				fields: ['id', 'licenseId', 'name', 'lastname', 'birthday', 'issueDate', 'validDate', 'blacklist'],
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
		
			return response[0] as Driver
		}
    



export async function createDriver({ licenseId, name, lastname, birthday, issueDate, validDate, blacklist }: CreateDriver): Promise<Driver> {
    
const response = await directusClient.request(
    createItem ('Drivers', {
        licenseId,
        name,
        lastname,
        birthday,
        issueDate,
        validDate,
        blacklist
    })
    ) ?? []

return response as Driver
	
}

export async function createLog({ autistaId, scan, enteredAt, exitAt, complete }: CreateLog): Promise<CreateLog> {
    const response = await directusClient.request(
		createItem('logs', {
			autistaId,
			scan,
			enteredAt,
			exitAt,
			complete
		})
	) ?? []

return response as CreateLog
	
}

export async function updateStateLog(_id:number , complete: boolean): Promise<boolean> {
    await directusClient.request(
        updateItem('logs', _id ,  {
            complete
        })
         
    )
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
