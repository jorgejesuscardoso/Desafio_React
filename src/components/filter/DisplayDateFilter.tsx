import { useDispatch } from "react-redux";
import { filterAllAction, filterDateAction, filterSearchDateAction } from "../redux/action/actions";
import { FormEvent, useState } from "react";
import { CloseBtn, DivDate, ErrMsgDiv, Form, SearchBtn } from "./Style";
import { scrolTop } from "../utils/Utils";


function FilterDate () {
  const dispatch = useDispatch();
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [erroDate, setErroDate] = useState(false);

  const executeSearch = (searchString: string) => {
    dispatch(filterSearchDateAction(searchString));
    dispatch(filterDateAction());
    scrolTop();
  };

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
      executeSearch('');
    } else if (initialDate && finalDate && initial <= final) {
      const fullDate = `de=${initialDate}&ate=${finalDate}`;
      executeSearch(fullDate);
    } else if (initialDate && initial <= final) {
      executeSearch(`de=${initialDate}`);
    } else if (finalDate && initial <= final) {
      executeSearch(`ate=${finalDate}`);
    } else {
      setErroDate(true);
    }
  }
  return (
    <div>
      <Form
       onSubmit={ handleSearch }
        data-testid="form-date"
      >
        <CloseBtn
          type="button"
          className="close"
          onClick={ () => 
          dispatch(filterDateAction()) }
          data-testid="close-btn"
        >                
          <p>✖️</p>
        </CloseBtn>
        <DivDate className="inputs-search-date">
          <label htmlFor="searchInitialDate">Data inicial:</label>
          <input
            type="date"
            id="searchInitialDate"
            placeholder="MM-DD-AA"
            value={ initialDate }
            onChange={ (e) => setInitialDate(e.target.value) }
            data-testid="search-initial-date"
          />
        </DivDate>
        <DivDate>
          <label htmlFor="searchFinalDate">Data final:</label>
          <input
            type="date"
            id="searchFinalDate"
            placeholder="MM-DD-AA"
            value={ finalDate }
            onChange={ (e) => setFinalDate(e.target.value) }
            data-testid="search-final-date"
          />
        </DivDate>
        <SearchBtn
          type="submit"
          data-testid="search-btn"
        >
          Buscar
        </SearchBtn>
        <ErrMsgDiv>
         { erroDate &&
          <p>
            Data inicial não pode ser maior que a data final!
          </p> }
        </ErrMsgDiv>
      </Form>
    </div>
  );
}

export default FilterDate;
