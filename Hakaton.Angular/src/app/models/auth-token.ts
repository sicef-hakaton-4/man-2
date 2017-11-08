export class AuthenticationToken {
    access_token: String;
    token_type: String;
    expires_in: number;
    refresh_token: String;
    userName: String;
    issued: String;
    expires: String;
    password: String;
    role: String;
    id:string;
  
    constructor() {
      this.access_token = null;
      this.token_type = null;
      this.expires_in = null;
      this.refresh_token = null;
      this.userName = null;
      this.issued = null;
      this.expires = null;
      this.role = null;
      this.id = null;
    }
  }
  