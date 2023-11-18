import { useDispatch } from "react-redux";
import { filterDateAction } from "../redux/action/actions";


function FilterDate () {
  const dispatch = useDispatch();
  const handleClose = () => { 
    dispatch(filterDateAction());
  };
  return (
    <div className="filter-items">
      <form className="search-date">
              <button
                type="button"
                className="close"
                onClick={ handleClose }
              >                
                <p>✖️</p>
              </button>
              <div className="inputs-search-date">
                <label htmlFor="searchInitialDate">Data inicial:</label>
                <input
                  type="text"
                  id="searchInitialDate"
                  placeholder="MM-DD-AA"
                />
              </div>
              <div className="inputs-search-date">
                <label htmlFor="searchFinalDate">Data final:</label>
                <input
                  type="text"
                  id="searchInitialDate"
                  placeholder="MM-DD-AA"
                />
              </div>
              <button className="search-date-btn">Buscar</button>
            </form>
    </div>
  );
}

export default FilterDate;
