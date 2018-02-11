export interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
    NAMESPACE: string;
}
export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'iXeDjC1a9XXXzLWLOhXOonG0VywCm0Qq',
    CLIENT_DOMAIN: 'bangoskank.auth0.com', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost:3200',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: 'openid profile email',
    NAMESPACE: 'http://myapp.com/roles'
  };