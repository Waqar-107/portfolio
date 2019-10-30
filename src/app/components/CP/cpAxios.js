import axios from 'axios';

export function fetchUserDetail(cb) {
  const url = 'https://codeforces.com/api/user.info?handles=_lucifer_';
  axios.get(url).then(res => {
    cb(res);
  }).catch(err => {
    console.log('error: ', err);
  })
};

export function fetchRating(cb){
  const url = 'https://codeforces.com/api/user.rating?handle=_lucifer_';

  axios.get(url).then(res => {
    cb(res);
  }).catch(err => {
    console.log('error: ', err);
  })
}