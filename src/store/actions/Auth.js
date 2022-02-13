
      export default class Action {
        //Constants
        static GET_TOKEN = 'GET_TOKEN';
      
      
        static LOGIN = 'LOGIN';
        static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
        static LOGIN_FAIL = 'LOGIN_FAIL';
      
      
        //Actions
        static getToken(payload) {
          alert('get token');
          return {
            type: Action.GET_TOKEN,
            payload,
          };
        }
        static login(payload) {
          return {
            type: Action.LOGIN,
            payload,
          };
        }
    }
        
      