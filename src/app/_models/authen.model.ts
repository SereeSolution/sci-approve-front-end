export interface loginParam {
    UserName: string;
    PassWord: string;
}

export interface loginResponse {
    status: boolean;
    message: string;
    displayname_th: string;
    displayname_en: string;
    email: string;
    type: string;
    department: string;
    faculty: string;
}
