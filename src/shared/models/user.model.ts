export interface User {
  person: Person;
  auth: Auth;
  role: Role;
}

interface Person {
  name: string;
  surname: string;
  phone: string;
  dniType: string;
  dniNumber: string;
};

interface Auth {
  email: string;
  password: string;
};

interface Role {
  nameRole: string;
  office: string;
  position: string;
  status: string;
};