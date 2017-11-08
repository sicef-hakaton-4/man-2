export class AuthRequest {
  grant_type: String;
  username: String;
  password: String;
  role: String;

  constructor() {
    this.grant_type = null;
    this.username = null;
    this.password = null;
    this.role = null;
  }
}