import IProduct from "@/utils/types/product";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const fetchProducts = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/products`);            
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return products;
};

export default useProducts;
