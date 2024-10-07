import { Outlet } from 'react-router-dom';
import { useSession } from '../hooks/session-context';
import { Link } from 'react-router-dom';

export default function ItemLayout() {
  const {
    session: { cart },
  } = useSession();

  // const navigate = useNavigate();

  // const [currItem, setCurrItem] = useState(cart[0]);

  // const goItem = (id: number) => {
  //   setCurrItem(cart.find(({ id: itemId }) => id === Number(itemId))!);
  //   navigate(`${id}`);
  // };

  return (
    <div className='flex w-full flex-row justify-between'>
      <div className='w-1/2 border text-center'>
        <ul>
          {cart.map(({ id, name }) => (
            <li key={id}>
              <Link to={`/items/${id}`}>{name}</Link>
              {/* <Button onClick={() => goItem(id)}>{name}</Button> */}
            </li>
          ))}
        </ul>
      </div>
      <div className='w-1/2 border text-center'>
        <Outlet />
        {/* <Outlet context={currItem} /> */}
      </div>
    </div>
  );
}
