import AxiosService from "@common/utils/axios";

const url = {
  getProductByType: ({ params, id }: any) =>
    `categories/${id}/products/${params !== undefined ? "?" + params : ""}`,
  searchProduct: ({ key }: any) => `products/search?key=${key}`,
  getAllProduct: () => `products`,
  getProductFeatures: () => `products/features`,
  getProductDetail: ({ id }: any) => `products/${id}`,
  getFacet: (payload: any) => `categories/${payload.id}/products/facets`,
  getVariant: (payload: any) => `products/${payload.id}/variations`,
};

const fetchProduct = {
  async getProductByType(payload: any) {
    const response = await handleLoopToGetData(url.getProductByType(payload));
    return response;
  },
  async getAllProduct(payload: any) {
    const response = await AxiosService.get(url.getAllProduct());
    return response;
  },
  async getProductFeatures(payload: any) {
    const response = await AxiosService.get(url.getProductFeatures());
    return response;
  },
  async getProductDetail(payload: any) {
    const response = await handleLoopToGetData(url.getProductDetail(payload));
    return response;
  },
  async searchProduct(payload: any) {
    const response = await AxiosService.get(url.searchProduct(payload));
    return response;
  },
  async getFacts(payload: any) {
    const response = await handleLoopToGetData(url.getFacet(payload));
    return response;
  },
  async getVariant(payload: any) {
    const response = await AxiosService.get(url.getVariant(payload));
    return response;
  },
};

export default fetchProduct;

const handleLoopToGetData: any = async (url: string) => {
  let response = await AxiosService.get(url);

  if (response) {
    return response;
  }

  return handleLoopToGetData(url);
};
