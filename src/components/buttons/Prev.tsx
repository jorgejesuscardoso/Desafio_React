import { PagesProps } from '../../type';
import { useDispatch } from 'react-redux';
import { prevPagesAction } from '../redux/action/actions';
import { PrevNextPageBtn } from './Style';

export function PrevBtn ({ page }: PagesProps) {
  const dispatch = useDispatch();
  
  return (
      <PrevNextPageBtn
      onClick={ () => dispatch(prevPagesAction()) }
      disabled={page === 1}
    >
      {'<<<'}
    </PrevNextPageBtn>
  );
}