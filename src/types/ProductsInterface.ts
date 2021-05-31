export interface ProductsCatalogProps {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

export interface ProductsCartProps {
  id: string;
  title: string;
  image_url: string;
  amount: number;
  price: number;
  priceFormatted: string;
}