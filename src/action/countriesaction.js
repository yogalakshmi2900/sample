import axios from 'axios';

const LIST_DATA  = 'LIST_DATA';

export function AC_LIST_DATA() {
  return function(dispatch) {
    return axios.get('https://restcountries.eu/rest/v2/all')
      .then(({ data }) => {
         dispatch({type: LIST_DATA, payload:data});
    });
  };
}
