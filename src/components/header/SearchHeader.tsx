import { useDispatch } from "react-redux";
import { CloseSearch, Search, SearchButton } from "./Style";
import { searchNewsAction } from "../redux/action/actions";
import { SearchContentProps } from "../../type";

function SearchContent ({ showSearch, setShowSearch, search, setSearch }: SearchContentProps) {
  const dispatch = useDispatch();

  return (
    <Search>
      <form onSubmit={ (e) => {
        e.preventDefault();
        dispatch(searchNewsAction(search));
        setSearch('');
      } }>
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          data-testid='search-input'
        />
        <SearchButton
          type="submit"   
          data-testid='search-btn'
        >
          Buscar
        </SearchButton>
        <CloseSearch 
          type="button"
          onClick={ () => {
            setShowSearch(!showSearch);
            setSearch('');
          } }          
          data-testid='close-search-btn'
        >
          ❌
        </CloseSearch>
      </form>
    </Search>
  )
}

export default SearchContent;
