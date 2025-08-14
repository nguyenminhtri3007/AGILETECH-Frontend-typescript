export class AuthModel {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  convertModelToExecute(data: AuthModel) {
        return {
            username: data.username,
            password: data.password
        }
    }
}