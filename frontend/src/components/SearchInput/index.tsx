import { useProduct } from "../../hooks/useProduct";
import { StyledSearchInput } from "./style";

export const SearchInput = () => {
  const { searchedItem, setSearchedItem } = useProduct();

  return (
    <StyledSearchInput>
      <input
        type="text"
        value={searchedItem}
        placeholder="Digite sua pesquisa..."
        onChange={(e) => setSearchedItem(e.target.value)}
      />
    </StyledSearchInput>
  );
};
