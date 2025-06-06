import _superagent from "superagent";
import SuperagentPromise from "superagent-promise";
import { BaseCreds } from "./env";

const superagent = SuperagentPromise(_superagent, global.Promise);
const baseURL = BaseCreds.API;
const responseBody = (res: any) => res.body;
let token: any = "";

const tokenPlugin = (req: any) => {
  if (token) {
    req.set("Authorization", `Bearer ${token}`);
  }
};

const requests = {
  del: (url: string) =>
    superagent.del(`${baseURL}${url}`).use(tokenPlugin).then(responseBody),
  get: (url: string) =>
    superagent.get(`${baseURL}${url}`).use(tokenPlugin).then(responseBody),
  put: (url: string, body: any) =>
    superagent
      .put(`${baseURL}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  patch: (url: string, body: any) =>
    superagent
      .patch(`${baseURL}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url: string, body?: any) =>
    superagent
      .post(`${baseURL}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  file: (url: string, key: string, file: any) =>
    superagent
      .post(`${baseURL}${url}`)
      .attach(key, file)
      .use(tokenPlugin)
      .then(responseBody),
};

const Default = {
  login: (body: any) => requests.post(`login`, body),
  verifyOtp: (body: any) => requests.post(`verify_otp`, body),
  registeration: (body: any) =>
    requests.post(`user_registration`, body),
};


const danceXApi = {

  Default,
  token,
  setToken: (_token?: string) => {
    token = _token;
  },
};

export default danceXApi;
