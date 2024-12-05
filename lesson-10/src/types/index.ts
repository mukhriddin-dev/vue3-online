export interface INavigation {
    path: string;
    title: string;
    icon?: string;
    auth?: boolean;
}

export interface Iaddress {
    street: string,
    city: string,
    state: string,
    zip: string,
}

export interface Iuser {
    name: string,
    age: number,
    email: string,
    address: Iaddress
}
