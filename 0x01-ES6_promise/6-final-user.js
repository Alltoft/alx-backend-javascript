/*eslint-disable*/
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((response) => response.map((Promise) => ({
    status: Promise.status,
    value: Promise.status === 'fulfilled' ? Promise.value : string(Promise.reason),
  })));
}
