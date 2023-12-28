import { Product } from "../interfaces/product";
import { readProductsFile, writeProductsFile } from "./fileOperations";

export async function deleteProduct(id: number): Promise<Product | null> {
  try {
    const productsData = await readProductsFile();
    const index = productsData.findIndex((product) => product.id === id);

    if (index !== -1) {
      const deletedProduct = productsData.splice(index, 1)[0];
      await writeProductsFile(productsData);
      return deletedProduct;
    } else {
      console.error('Product not found for deletion.');
      return null;
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    return null;
  }
}

export async function updateProduct(
  id: number,
  updatedProduct: Partial<Product>,
): Promise<Product | null> {
  try {
    const productsData = await readProductsFile();
    const index = productsData.findIndex((product) => product.id === id);

    if (index !== -1) {
      const updatedProductData = { ...productsData[index], ...updatedProduct };
      productsData[index] = updatedProductData;
      await writeProductsFile(productsData);
      return updatedProductData;
    } else {
      console.error('Product not found for update.');
      return null;
    }
  } catch (error) {
    console.error('Error updating product:', error);
    return null;
  }
}

export function findOneProduct(id: number): Promise<Product | null> {
  return readProductsFile()
    .then((products) => products.find((product) => product.id === id) || null)
    .catch((error) => {
      console.error('Error finding product:', error);
      return null;
    });
}