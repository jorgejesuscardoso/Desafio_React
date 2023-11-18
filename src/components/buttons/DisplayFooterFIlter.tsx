import { useDispatch } from "react-redux";
import { filterDateAction } from "../redux/action/actions";

function DisplayFooterFIlter() {
  const dispatch = useDispatch();
  const handleFilterGeosciences = () => {
    console.log('geociências');
  }
  const handleFilterEconomy = () => {
    console.log('economia');
  }
  const handleFilterSocial = () => {
    console.log('sociais');
  }
  const handleFilterIBGE = () => {
    console.log('IBGE');
  }
  const handleFilterDate = () => {
    dispatch(filterDateAction());
  }

  return (
    <div className="display-footer-menu">
      <div className="title-display-menu">
        <h3>Escolha um filtro</h3>
      </div>
        <button className="display-menu-btn" onClick={handleFilterGeosciences}>
          Geociências
        </button>
        <button className="display-menu-btn" onClick={handleFilterSocial}>
          Sociais
        </button>
        <button className="display-menu-btn" onClick={handleFilterDate}>
          Data
        </button>
        <button className="display-menu-btn" onClick={handleFilterIBGE}>
          IBGE
        </button>
        <button className="display-menu-btn" onClick={handleFilterEconomy}>
          Economia
        </button>
    </div>
  );
}

export default DisplayFooterFIlter;
