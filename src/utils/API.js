import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

  const mock = new MockAdapter(axios);
  
  mock.onGet('/api/login').reply(200, {
    users: [
      { id: 1 }
    ]
  });

  mock.onPost('/api/signup').reply(200, {
    users: [
      { id: 1 }
    ]
  });

  mock.onPost('/api/newuser').reply(200, {
    users: [
      { id: 1 }
    ]
  });

  mock.onPost('/api/newuser').reply(200, {
    users: [
      { id: 2 }, { id: 3 }, { id: 4 }
    ]
  });

export default {

  logIn: function(loginData) {
    //return "1";
    return axios.get("/api/login", loginData);
  },

  signUp: function(signupData) {
    //return "1";
    return axios.post("/api/signup", signupData);
  },  

  createUser: function(userData) {
    //return "1";
    return axios.post("/api/newuser", userData);
  },  

  findMatches: function(searchData) {
    //return "1";
    return axios.get("/api/matches", searchData);
  },
  /*// Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }*/
};
