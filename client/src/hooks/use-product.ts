import IProduct from "@/utils/types/product";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useProductById = (productId: number) => {
    const [product, setProduct] = useState<IProduct | null>(null);

    const fetchProductById = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        } catch (error) {
            console.error(error);
        }
    }, [productId]);

    useEffect(() => {
        fetchProductById();
    }, [fetchProductById]);

    return product;
};

export default useProductById;
