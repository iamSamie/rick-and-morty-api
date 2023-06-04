import { API_URL } from './config'

const getAllCharacters = async () => {
    const response = await fetch(API_URL)
    return await response.json()
}

const getFilterStatusCharacters = async (filter) => {
    const response = await fetch(API_URL + '?status=' + filter)
    return await response.json()
}

const getFilterGenderCharaters = async (filter) => {
    const response = await fetch(API_URL + '?gender=' + filter)
    return await response.json()
}

const getSearchCharaters = async (search) => {
    const response = await fetch(API_URL + '?search=' + search)
    return await response.json()
}
