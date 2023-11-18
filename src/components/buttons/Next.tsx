import { PagesProps } from '../../type';
import { useDispatch } from 'react-redux';
import { nextPagesAction } from '../redux/action/actions';

export function NextBtn ({ page, totalPages }: PagesProps) {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(nextPagesAction());
  }
  return (
      <button
      onClick={handleNextPage}
      disabled={page === totalPages}
      className='page-btn'
    >
      {'>>>'}
    </button>
  );
}
