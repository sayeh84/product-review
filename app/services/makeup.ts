export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  price_sign: string | null;
  description: string | null;
  image_link: string;
  product_link: string;
  website_link: string;
}

export async function fetchProducts(limit: number = 10): Promise<Product[]> {
  try {
    const res = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const data: Product[] = await res.json();
    return data.slice(0, limit);
  } catch (err) {
    console.error(err);
    return [];
  }
}
