const BASE_URL = 'https://gorest.co.in/public/v1/';

export const ApiRoutes = {
    API_GET_USERS: `${BASE_URL}users?page=1`,
    API_CREATE_USERS: `${BASE_URL}users`,
    API_UPDATE_USERS: (userid: number) => `${BASE_URL}users/${userid}`
}