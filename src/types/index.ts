export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthCredentials {
  name?: string;
  email: string;
  password: string;
}

export interface KanjisInfo {
  category: string;
  name: string;
  kanji: string;
  writed: string;
  latin: string;
}
