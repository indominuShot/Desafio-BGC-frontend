export default interface _AwsLoginResponse {
  Session: null;
  attributes: {
    sub: string;
    email_verified: true;
    email: 'luang193@gmail.com';
  };
  authenticationFlowType: 'USER_SRP_AUTH';
  pool: { userPoolId: string; clientId: string };
  userDataKey: String;
  username: string;
}
