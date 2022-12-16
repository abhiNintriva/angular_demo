export interface LoginResponse {
    data: LoginData;
    success: boolean;
    message: string;
    statusCode: string;

}

interface LoginData {
    access_token: string;
    error: null;
    error_description: null;
    error_uri: null;
    expires_in: number;
    id_token: null;
    // not-before-policy:number;
    refresh_expires_in: number;
    refresh_token: string;
    scope: string;
    session_state: string;
    token_type: string;
}