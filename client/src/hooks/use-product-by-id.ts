import IProduct from "@/utils/types/product";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

const useProductById = (productId: number) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    const fetchProductById = useCallback(async () => {
        setIsLoading(true);
        try {
            const { data }: AxiosResponse<IProduct> = await axios.get(
                `/api/products/${productId}`
            );
            setProduct(data);
        } catch (error) {
            if (!(error instanceof AxiosError)) {
                return;
            }
            
            if (error.response) {
                const errorArray = error.response.data.error;
                setErrors(errorArray);
            }
            
        } finally {
            setIsLoading(false);
        }
    }, [productId]);

    useEffect(() => {
        fetchProductById();
    }, [fetchProductById]);

    return { product, isLoading, errors };
};

export default useProductById;
