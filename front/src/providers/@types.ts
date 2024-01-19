import { ReactNode } from "react";
import {
  TLoginData,
  TRegisterData,
  TUserUpdate,
} from "../validators/userValidator";
import { NavigateFunction } from "react-router-dom";
import {
  TProductCreateData,
  TProductUpdateData,
} from "../validators/productValidator";

export interface UserProviderProps {
  children: ReactNode;
}

export interface ProductProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  enabled: boolean;
  authorities: null;
  username: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

export interface IProduct {
  id: number;
  code: string;
  name: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserContextValues {
  navigate: NavigateFunction;
  token: string | null;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  modal: String | null;
  showModal: React.Dispatch<React.SetStateAction<String | null>>;
  userLogin: (data: TLoginData) => Promise<void>;
  userProfile: () => Promise<void>;
  userLogout: () => void;
  userCreate: (data: TRegisterData) => Promise<void>;
  userUpdate: (userId: number, data: TUserUpdate) => Promise<void>;
  userDelete: (userId: number) => Promise<void>;
  goToRegister: () => void;
  goToLogin: () => void;
  // toggleDarkMode: () => void;
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProductContextValues {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  singleProduct: IProduct | null;
  setSingleProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
  editProduct: IProduct | null;
  setEditProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
  searchedItem: string;
  setSearchedItem: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sortField: "code" | "name";
  setSortField: React.Dispatch<React.SetStateAction<"code" | "name">>;
  sortDir: "asc" | "desc";
  setSortDir: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
  productCreate: (data: TProductCreateData) => Promise<void>;
  productListAll: () => Promise<void>;
  productListPag: () => Promise<void>;
  productRetrive: (productId: number) => Promise<void>;
  productUpdate: (productId: number, data: TProductUpdateData) => Promise<void>;
  productDelete: (productId: number) => Promise<void>;
  nextPage: () => void;
  prevPage: () => void;
  sortFieldToName: () => void;
  sortFieldToCode: () => void;
  changeSortDir: () => void;
}
