import { useDispatch, useSelector } from "react-redux";
import { filterDateAction, filterEconomyAction, filterGeoscienceAction, filterIbgeAction, filterSocialAction } from "../redux/action/actions";
import { DateProp, MiscellanousFilterType } from "../../type";
import { scrolTop } from "../utils/Utils";

function DisplayFooterFIlter() {
  const { filterEconomy, filterGeoscience, filterIbge, filterSocial } = useSelector((state: MiscellanousFilterType) => state.filterAll);
  const { searchDate } = useSelector((state: DateProp) => state.filterDate);
  const dispatch = useDispatch();

  const handleFilterGeosciences = () => {
    dispatch(filterGeoscienceAction());
    scrolTop();
  }
  const handleFilterEconomy = () => {
    dispatch(filterEconomyAction())
    scrolTop();
  }
  const handleFilterSocial = () => {
    dispatch(filterSocialAction())
    scrolTop();
  }
  const handleFilterIBGE = () => {
    dispatch(filterIbgeAction())
    scrolTop();
  }
  const handleFilterDate = () => {
    dispatch(filterDateAction());
    scrolTop();
  }

  return (
    <div className="display-footer-menu">
      <div className="title-display-menu">
        <h3>Escolha um filtro</h3>
      </div>
        <button className={ filterGeoscience ? "display-menu-btn filtred-btn" : "display-menu-btn" } onClick={handleFilterGeosciences}>
          Geociências
        </button>
        <button className={ filterSocial ? "display-menu-btn filtred-btn" : "display-menu-btn" } onClick={handleFilterSocial}>
          Sociais
        </button>
        <button className={ searchDate ? "display-menu-btn filtred-btn" : "display-menu-btn" } onClick={handleFilterDate}>
          Data
        </button>
        <button className={ filterIbge ? "display-menu-btn filtred-btn" : "display-menu-btn" } onClick={handleFilterIBGE}>
          IBGE
        </button>
        <button className={ filterEconomy ? "display-menu-btn filtred-btn" : "display-menu-btn" } onClick={handleFilterEconomy}>
          Economia
        </button>
    </div>
  );
}

export default DisplayFooterFIlter;
