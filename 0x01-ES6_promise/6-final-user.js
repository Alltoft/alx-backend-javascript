import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'

export default function handleProfileSignup(firstName, lastName, fileName){
    const User = signUpUser
    const photo = uploadPhoto
    return Promise.allSettled([
        {
            status: Promise.status
        }
    ])
}