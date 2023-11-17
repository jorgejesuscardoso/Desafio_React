import { PagesProps } from '../../type';
import { useDispatch } from 'react-redux';
import { prevPagesAction } from '../redux/action/pagesAction';

export function PrevBtn ({ page }: PagesProps) {
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    dispatch(prevPagesAction());
  }
  return (
      <button
      onClick={handlePrevPage}
      disabled={page === 1}
      className='page-btn'
    >
      {'<<<'}
    </button>
  );
}