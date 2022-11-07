/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { delay } from './utils/delay';
import { APIError } from './errors/APIErrors';

const fakeUser = {
  name: 'Usuario1',
  email: 'email@example.com',
  avatarUrl: 'src/assets/images/felipe-avatar.jpg',
};

class API {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    });

    this._delayDebug = 2000;
  }

  setDefaultHeader(headerKey, value) {
    this.api.defaults.headers.common[headerKey] = value;
  }

  unsetDefaultHeader(headerKey) {
    this.api.defaults.headers.common[headerKey] = null;
  }

  async login({ name, password }) {
    await delay(this._delayDebug);

    if (name !== fakeUser.name) {
      throw new APIError(404, 'Usuário não encontrado.');
    }

    if (password === 'wrongtest') {
      throw new APIError(401, 'Senha incorreta.');
    }

    return {
      user: fakeUser,
      token: 'tokenexample',
    };
  }

  async signup({
    name, email, password, confirmPassword,
  }) {
    await delay(this._delayDebug);

    if (name === fakeUser.name) {
      throw new APIError(400, 'Nome já em uso.');
    }

    if (email === fakeUser.email) {
      throw new APIError(400, 'E-mail já cadastrado.');
    }

    return {
      user: fakeUser,
      token: 'tokenexample',
    };
  }

  async validate({ token }) {
    await delay(this._delayDebug);

    if (token === 'wrongtoken') {
      throw new APIError(400, 'Sessão expirada.');
    }

    return { user: fakeUser };
  }

  async restorePassword({ email }) {
    await delay(this._delayDebug);

    return { message: 'Enviamos instruções para seu e-mail, verifique sua caixa de entrada ou de spam.' };
  }

  async updateNameUser({ name }) {
    await delay(this._delayDebug);

    return {
      user: {
        ...fakeUser,
        name,
      },
    };
  }

  async updatePasswordUser({ currentPassword, newPassword, confirmPassword }) {
    await delay(this._delayDebug);

    if (currentPassword === 'wrongtest') {
      throw new APIError(401, 'Senha inválida.');
    }

    return { user: fakeUser };
  }

  async updateAvatarUser() {
    await delay(this._delayDebug);

    return {};
  }

  async deleteUserAccount({ password }) {
    await delay(this._delayDebug);

    if (password === 'wrongtest') {
      throw new APIError(401, 'Senha inválida.');
    }

    return {};
  }
}

const api = new API();

export { api };
