import { menuFilterIcon } from "../icons/Imports";
import { footerMenuDisplayAction } from "../redux/action/actions";
import { useDispatch } from "react-redux";
import { FilterFooterMenu } from "./Style";

function FooterFIlterBtn () {
  const dispatch = useDispatch();
  
  return (
    <FilterFooterMenu
      onClick={ () => dispatch(footerMenuDisplayAction())  }
    >
      <img src={ menuFilterIcon } alt="menu-filter" />
    </FilterFooterMenu>
  );
}

export default FooterFIlterBtn;
