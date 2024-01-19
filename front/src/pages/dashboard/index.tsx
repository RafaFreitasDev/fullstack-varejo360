import { useEffect } from "react";
import { StyledDashboard } from "./style";
import { useUser } from "../../hooks/useUser";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../../components/productCard";
import { SearchInput } from "../../components/SearchInput";
import { IProduct } from "../../providers/@types";
import { api } from "../../service/api";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CreateProducttForm } from "../../components/Foms/createProductFrom";
import { UpdateProductForm } from "../../components/Foms/updateProductForm";
import { Switch } from "@mui/material";

export const Dashboard = () => {
  const { user, userLogout, isDarkMode, setIsDarkMode } = useUser();
  const {
    products,
    searchedItem,
    setProducts,
    productListPag,
    prevPage,
    nextPage,
    sortDir,
    sortField,
    changeSortDir,
    sortFieldToCode,
    sortFieldToName,
    editProduct,
  } = useProduct();

  useEffect(() => {
    const search = async () => {
      if (searchedItem === "") {
        productListPag();
      } else {
        const products = await api.get<IProduct[]>("/product");
        const searchedProducts = products.data.filter((product) => {
          return (
            product.name.toLowerCase().includes(searchedItem.toLowerCase()) ||
            product.code.toString().includes(searchedItem)
          );
        });

        setProducts(searchedProducts);
      }
    };
    search();
  }, [searchedItem]);

  return (
    <StyledDashboard>
      {editProduct ? <UpdateProductForm /> : null}

      <div className="darkMode">
          <h4>Dark Mode</h4>
          <Switch
            checked={isDarkMode}
            onChange={(event) => setIsDarkMode(event.target.checked)}
          />
        </div>
      <section className="perfil">
        <div>
          <h3>{user?.name}</h3>
          <h4>{user?.email}</h4>
        </div>
       
        <button onClick={() => userLogout()}>Logout</button>
      </section>

      <h1>Catálogo de Leite</h1>

      <SearchInput />

      <ul>
        <section className="titles">
          <div onClick={() => sortFieldToCode()}>
            Código{" "}
            <span onClick={() => changeSortDir()}>
              {sortField === "code" &&
                (sortDir === "asc" ? <IoIosArrowDown /> : <IoIosArrowUp />)}
            </span>
          </div>
          <div onClick={() => sortFieldToName()}>
            Nome{" "}
            <span onClick={() => changeSortDir()}>
              {sortField === "name" &&
                (sortDir === "asc" ? <IoIosArrowDown /> : <IoIosArrowUp />)}
            </span>
          </div>

          <div className="action">Ações</div>
        </section>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            code={product.code}
            id={product.id}
          />
        ))}
      </ul>

      <div className="btnList">
        <button onClick={() => prevPage()}>
          <FaArrowLeft size={20}/>
        </button>
        <button onClick={() => nextPage()}>
          <FaArrowRight size={20}/>
        </button>
      </div>

      <CreateProducttForm />
    </StyledDashboard>
  );
};
