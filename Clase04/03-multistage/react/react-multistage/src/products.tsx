import { useEffect, useState } from "react";

export const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000");
        if (!response.ok) throw new Error("Error al obtener los productos");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product: any, index: number) => (
        <li key={index}>
          {product.title} - {product.quantity}
        </li>
      ))}
    </ul>
  );
};
