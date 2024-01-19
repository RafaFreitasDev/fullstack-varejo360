import { createContext, useEffect, useState } from "react";
import { IProduct, ProductContextValues, ProductProviderProps } from "./@types";
import {
  TProductCreateData,
  TProductUpdateData,
} from "../validators/productValidator";
import { useUser } from "../hooks/useUser";
import { toast } from "react-toastify";
import { api } from "../service/api";

export const ProductContext = createContext({} as ProductContextValues);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const { navigate, token } = useUser();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null);
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);
  const [searchedItem, setSearchedItem] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [sortField, setSortField] = useState<"name" | "code">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [maxPage, setMaxPage] = useState<number>(0);

  const productCreate = async (data: TProductCreateData) => {
    try {
      const response = await api.post<IProduct>("/product", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSingleProduct(response.data)
      toast.success("Cadastro com sucesso");
    } catch (error:any) {
      console.log(error.request.response);
      toast.error(`${error.request.response}`);
    }
  };

  const productListAll = async () => {
    try {
      const response = await api.get<IProduct[]>("/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const productListPag = async () => {
    try {
      const response = await api.get<any>(
        `/product/pag?page=${page}&sortField=${sortField}&sortDir=${sortDir}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(response.data.content);
      setMaxPage(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const productRetrive = async (productId: number) => {
    if (token) {
      try {
        const response = await api.get<IProduct>(`/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSingleProduct(response.data);
        toast.success("Atualização com sucesso");
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const productUpdate = async (productId: number, data: TProductUpdateData) => {
    if (token) {
      try {
        const response = await api.put<IProduct>(
          `/product/${productId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        setSingleProduct(response.data);
      
        toast.success("Atualização com sucesso");
      } catch (error:any) {
        console.log(error.request.response);
        toast.error(`${error.request.response}`);
      }
    }
  };

  const productDelete = async (productId: number) => {
    if (token) {
      try {
        const response = await api.delete<void>(`/product/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        toast.success("Produto deletado");
      } catch (error:any) {
        console.log(error.request.response);
        toast.error(`${error.request.response}`);
      }
    }
  };

  const nextPage = () => {
    if (page < maxPage - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  const sortFieldToName = () => {
    setSortField("name")
  };

  const sortFieldToCode = () => {
    setSortField("code")
  };

  const changeSortDir = () =>{
    setSortDir(currentDir => {
      // Se o sortField atual é 'name', mude para 'code', e vice-versa.
      return currentDir === "asc" ? "desc" : "asc";
    })
  }

  useEffect(() => {
    productListPag();
  }, [token, singleProduct, editProduct, sortDir, sortField, page]);


  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        singleProduct,
        setSingleProduct,
        editProduct,
        setEditProduct,
        searchedItem,
        setSearchedItem,
        page,
        setPage,
        sortField,
        setSortField,
        sortDir,
        setSortDir,
        productCreate,
        productListAll,
        productListPag,
        productRetrive,
        productUpdate,
        productDelete,
        nextPage,
        prevPage,
        sortFieldToName,
        sortFieldToCode,
        changeSortDir
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
