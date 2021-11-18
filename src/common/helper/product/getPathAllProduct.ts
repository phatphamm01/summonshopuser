import { IProduct } from "@interfaces/product";

export const getPathProductAll = (data: Array<IProduct>) => {
  let result = data.map((path) => ({
    params: {
      productDetail: [path._id, path.slug],
    },
  }));

  return result;
};
