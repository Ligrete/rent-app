export interface LogInModel {
  email: string;
  password: string;
}

export interface SignUpModel {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phone: string;
  password: string;
  sex: UserSex ;
  type: UserType;
}

export enum UserType {
  user = 10,
  customer = 20,
  operator = 50,
}

export enum UserSex {
  man = 1,
  woman = 0,
}