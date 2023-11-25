import { useDispatch, useSelector } from "react-redux"
import { filterAllAction, filterFavoriteAction, filterMarkedAction } from "../redux/action/actions"
import { FilterTypeNewsRelease, MiscellanousFilterType } from "../../type"
import { scrolTop } from "../utils/Utils"
import { FilterBtnTop } from "./Style"
import { AnyAction } from "redux"
import { DarkModeType } from "../home/Home"
import { useEffect, useState } from "react"

function TopFilter () {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: DarkModeType) => state.darkMode)
  const { filterFavorite, filterMarked } = useSelector((state: MiscellanousFilterType) => state.filterAll)
  const [isDarkmode, setIsDarkmode] = useState(darkMode)


  const { filterNewsAndRelease } = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease)

  const handleButtonClick = (action: AnyAction) => {
    scrolTop()
    dispatch(action)
  }

  useEffect(() => {
    setIsDarkmode(darkMode)
  }, [darkMode])
  
  return (
    <>
      <FilterBtnTop
        className={ !filterNewsAndRelease ? "filtred-btn-top" : "" }
        onClick={ () => handleButtonClick(filterAllAction('')) }
        data-testid='filter-todos'
        style={{ color: isDarkmode ? '#fff' : 'rgb(100,100,100)' }}
      >
        Todos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterFavorite ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => handleButtonClick(filterFavoriteAction())}
        data-testid='filter-favoritos'
        style={{ color: isDarkmode ? '#fff' : 'rgb(100,100,100)' }}      
      >
        Favoritos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterMarked ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => handleButtonClick(filterMarkedAction())}
        data-testid='filter-marcados'
        style={{ color: isDarkmode ? '#fff' : 'rgb(100,100,100)' }}
      >
        Marcados
      </FilterBtnTop>

      <FilterBtnTop 
        className={ filterNewsAndRelease === 'noticia' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => handleButtonClick(filterAllAction('noticia'))}
        data-testid='filter-noticias'
        style={{ color: isDarkmode ? '#fff' : 'rgb(100,100,100)' }}
      >
        Notícias
      </FilterBtnTop>

      <FilterBtnTop
        className={ filterNewsAndRelease === 'release' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => handleButtonClick(filterAllAction('release'))}
        data-testid='filter-releases'
        style={{ color: isDarkmode ? '#fff' : 'rgb(100,100,100)' }}
        >
        Releases
      </FilterBtnTop>
    </>
  )
}

export default TopFilter
