import axios from 'axios';
import {storageLoad} from "./storage";

export const authenticateUser = () => {
  // test
  return false 
  
    let klaviyoUser = storageLoad('klaviyoUser')

    if(klaviyoUser) {

      var data = JSON.stringify({
        "email": klaviyoUser
      });

      var config = {
        method: 'get',
        url: 'http://localhost:3000/auth/whoami',
        headers: { 
          'Content-Type': 'application/json'          
        },
      data : data
      };
      alert(JSON.stringify(config))

      axios(config).then(function (response) {
        if(response.data.email && response.data.id){
          return true
        } else {
          return false
        }
      })
      .catch(function (error) {
        return false
      });
    } else {
      return false
    }
}

