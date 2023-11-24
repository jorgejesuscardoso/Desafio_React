import { useDispatch } from "react-redux";
import { Search } from "./Style";
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
        <button
          type="submit"   
          data-testid='search-btn'
        >
          Buscar
        </button>
        <button 
          type="button"
          onClick={ () => {
            setShowSearch(!showSearch);
            setSearch('');
          } }
          style={{ backgroundColor: '#fff', width: 25, height: 25 }}
          data-testid='close-search-btn'
        >
          ❌
        </button>
      </form>
    </Search>
  )
}

export default SearchContent;
