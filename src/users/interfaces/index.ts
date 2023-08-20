export interface UserRegister {
    email: string,
    firstName: string,
    lastName: string,
    active: boolean,
    createdAt: Date
}

export interface UserLogin {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    active: boolean,
    createdAt: Date,
    accessToken: string;
} 
