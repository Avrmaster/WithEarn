import ApiClient from './ApiClient'

const clientApi = new ApiClient()

export const getChallenges = userId => clientApi.app_challenges_get_all({ fromUser: { id: 2 } })