import { PayloadAction } from "@reduxjs/toolkit";
import { IVariant } from "../product";

export interface IUser {
  email?: string;
  fname?: string;
  lname?: string;
  phoneNumber?: string;
}

export interface IWish {
  _id?: string;
  name?: string;
  category?: string;
  categoryName?: string;
  brand: string;
  imageCovers?: string[];
  slug?: string;
  discountPrice?: number;
  price?: number;
  id?: string;
  variants: Array<IVariant>;
}
export type IWishlist = Array<IWish>;

export type IAddWishlistPayload = { product: string };

export type IAddCartPayload = { quantity: number; productVariation: string };

export interface ICart {
  _id: string;
  idProduct: string;
  price: number;
  quantity: number;
  name: string;
  imageCovers: string[];
  images: string[];
  variants: IVariant;
  slug: string;
}

export type ICartList = Array<ICart>;
