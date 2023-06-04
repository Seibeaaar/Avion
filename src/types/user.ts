export interface UserAddress {
  city: string;
  street: string;
  number: string;
  zipcode: string;
}

export interface SignUpInfo {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  address: UserAddress;
}

export interface User extends SignUpInfo {
  id: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
