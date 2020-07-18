const fetch = require('node-fetch');
const API_BASE = 'https://jsonplaceholder.typicode.com/todos/2';

const App = {
  /**
   * Initalize the page and websocket connection
   */
  async init() {
    const result = fetch(`${API_BASE}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  },
};

App.init();
