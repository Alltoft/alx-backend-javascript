export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve) => {
    resolve('Here is the response');
  });
  return myPromise;
}
