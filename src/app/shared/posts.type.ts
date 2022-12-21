export interface type {
    name: string;
    email: string;
    mobile: number;
    employeeCode: string;
    project: Projects[];
}

export interface UserListResponse {
    pageNumber: number;
    totalPage: number
    users: type[]
}

export interface Projects {
    id: number;
    project: string
}