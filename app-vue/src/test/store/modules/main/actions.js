import axios from 'axios';

export const actions = {
    async FETCH_TEST_API(){
        const  response = await axios.get('https://reqres.in/api/users?page=1');
        console.log(response.data)
    }
}