import fs from 'fs/promises';
import { join } from 'path';
import { Product } from '../interfaces/product';

const dataFilePath = join(process.cwd(), 'data/products.json');

export async function readProductsFile(): Promise<Product[]> {
  try {
    const content = await fs.readFile(dataFilePath, 'utf-8');
    console.log(content);
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
}

export async function writeProductsFile(data: Product[]): Promise<void> {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing to products file:', error);
  }
}
