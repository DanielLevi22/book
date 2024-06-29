const params = {
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'YOUR_REDIRECT_URI',
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  include_granted_scopes: 'true',
  state: 'pass-through value',
}
// https://accounts.google.com/o/oauth2/v2/auth?
//  response_type=code&
//  client_id=850327993603-jf43i2qi6fpbc07vt0ropjs58gt33s4r.apps.googleusercontent.com&
//  scope=openid%20email&
//  redirect_uri=http://localhost:3333/auth/calback&
//  nonce=0394852-3190485-2490358

// https://developers.google.com/identity/openid-connect/openid-connect?hl=pt-br#sendauthrequest
