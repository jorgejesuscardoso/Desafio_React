import { useDispatch } from "react-redux";
import { filterAllAction, filterDateAction, filterSearchDateAction } from "../redux/action/actions";
import { FormEvent, useState } from "react";


function FilterDate () {
  const dispatch = useDispatch();
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [erroDate, setErroDate] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const initial = new Date(initialDate);
    const final = new Date(finalDate);
    if (initial > final) {
      setErroDate(true);
      return;
    }
    if (!initialDate && !finalDate) {
      dispatch(filterAllAction('noticia'));
      const date = '';
      dispatch(filterSearchDateAction(date));
      window.scrollTo(0, 0);
    } 
    if (initialDate && finalDate) {
      const fullDate = `de=${initialDate}&ate=${finalDate}`;
      dispatch(filterSearchDateAction(fullDate));
      window.scrollTo(0, 0);
    } else if (initialDate) {
      dispatch(filterSearchDateAction(`de=${initialDate}`));
      window.scrollTo(0, 0);
    } else if (finalDate) {
      dispatch(filterSearchDateAction(`ate=${finalDate}`));
      window.scrollTo(0, 0);
    }
    dispatch(filterDateAction());
    window.scrollTo(0, 0);
  }
  const handleClose = () => { 
    dispatch(filterDateAction());
  };
  return (
    <div className="filter-items">
      <form
       className="search-date"
       onSubmit={ handleSearch }
      >
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
                  type="date"
                  id="searchInitialDate"
                  placeholder="MM-DD-AA"
                  value={ initialDate }
                  onChange={ (e) => setInitialDate(e.target.value) }
                />
              </div>
              <div className="inputs-search-date">
                <label htmlFor="searchFinalDate">Data final:</label>
                <input
                  type="date"
                  id="searchFinalDate"
                  placeholder="MM-DD-AA"
                  value={ finalDate }
                  onChange={ (e) => setFinalDate(e.target.value) }
                />
              </div>
              <button
                className="search-date-btn"
                type="submit"
              >
                Buscar
              </button>
              <div className="erro-msg-date">
              { erroDate && <p className="error">Data inicial não pode ser maior que a data final!</p> }
              </div>
            </form>
    </div>
  );
}

export default FilterDate;
