import { menuFilterIcon } from "../icons/Imports";
import { footerMenuDisplayAction } from "../redux/action/actions";
import { useDispatch } from "react-redux";

function FooterFIlterBtn () {
  const dispatch = useDispatch();
  const handleFilter = () => {
    dispatch(footerMenuDisplayAction());
  }
  return (
    <button
     className="page-btn filter"
      onClick={ handleFilter }
    >
      <img src={ menuFilterIcon } alt="menu-filter" />
    </button>
  );
}

export default FooterFIlterBtn;
