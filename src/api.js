/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import APIError from './errors/APIErrors';

class API {
  constructor() {
    this.api = axios.create({
      baseURL: `http://localhost:${process.env.API_PORT}`,
    });
  }

  setDefaultHeader(headerKey, value) {
    this.api.defaults.headers.common[headerKey] = value;
  }

  unsetDefaultHeader(headerKey) {
    this.api.defaults.headers.common[headerKey] = null;
  }

  login({ name, password }) {
    return new Promise((resolve) => {
      resolve({
        user: {
          name,
          email: 'email@example.com',
          avatarUrl: './assets/images/felipe-avatar.jpg',
        },
        token: 'tokenexample',
      });
    });
  }

  signup({
    name, email, password, confirmPassword,
  }) {
    return new Promise((resolve) => {
      resolve({
        user: {
          name,
          email,
          avatarUrl: './assets/images/felipe-avatar.jpg',
        },
        token: 'tokenexample',
      });
    });
  }
}

const api = new API();

export { api };
