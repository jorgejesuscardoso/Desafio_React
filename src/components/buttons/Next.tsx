import { PagesProps } from '../../type';
import { useDispatch } from 'react-redux';
import { nextPagesAction } from '../redux/action/actions';
import { PrevNextPageBtn } from './Style';

export function NextBtn ({ page, totalPages }: PagesProps) {
  const dispatch = useDispatch();

  return (
    <PrevNextPageBtn
      onClick={ () => dispatch(nextPagesAction()) }
      disabled={page === totalPages}
      className='page-btn'
      data-testid='next-btn'
    >
      {'>>>'}
    </PrevNextPageBtn>
  );
}
