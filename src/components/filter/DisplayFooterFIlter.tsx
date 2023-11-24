import { useDispatch, useSelector } from "react-redux";
import { filterDateAction, filterEconomyAction, filterGeoscienceAction, filterIbgeAction, filterSocialAction } from "../redux/action/actions";
import { DateProp, MiscellanousFilterType } from "../../type";
import { scrolTop } from "../utils/Utils";
import { ContainerFooterMenu, TitleFooterMenu } from "../buttons/Style";
import { AnyAction } from "redux";


function DisplayFooterFIlter() {
  const { filterEconomy, filterGeoscience, filterIbge, filterSocial } = useSelector((state: MiscellanousFilterType) => state.filterAll);
  const { searchDate } = useSelector((state: DateProp) => state.filterDate);
  const dispatch = useDispatch();
 
  const handleButtonClick = (action: AnyAction ) => {
    scrolTop();
    dispatch(action);
  }

  return (
    <ContainerFooterMenu data-testId="footer-home-menu">
      <TitleFooterMenu>
        <h3>Filtros</h3>
      </TitleFooterMenu>
        <button
          className={ filterGeoscience ? "display-menu-btn filtred-btn" : "display-menu-btn" }
          onClick={ () => handleButtonClick(filterGeoscienceAction())}
          data-testid="geoscience-btn"
        >
          Geociências
        </button>
        <button
          className={ filterSocial ? "display-menu-btn filtred-btn" : "display-menu-btn" }
          onClick={ () => handleButtonClick(filterSocialAction()) }
          data-testid="social-btn"
        >
          Sociais
        </button>
        <button
          className={ searchDate ? "display-menu-btn filtred-btn" : "display-menu-btn" }
          onClick={ () => handleButtonClick(filterDateAction())}
          data-testid="date-btn"
        >
          Data
        </button>
        <button
          className={ filterIbge ? "display-menu-btn filtred-btn" : "display-menu-btn" }
          onClick={ () => handleButtonClick(filterIbgeAction())}
          data-testid="ibge-btn"
        >
          IBGE
        </button>
        <button
          className={ filterEconomy ? "display-menu-btn filtred-btn" : "display-menu-btn" }
          onClick={ () => handleButtonClick(filterEconomyAction())}
          data-testid="economy-btn"
        >
          Economia
        </button>
    </ContainerFooterMenu>
  );
}

export default DisplayFooterFIlter;
