import { Button } from 'react-bootstrap';
import FantasyBooks from '../../json/fantasy.json';
import HistoryBooks from '../../json/history.json';
import HorrorBooks from '../../json/horror.json';
import RomanceBooks from '../../json/romance.json';
import SciFiBooks from '../../json/scifi.json';

const BooksList = ({ setList }) => {
  const categories = [
    {
      genre: 'Fantasy',
      data: FantasyBooks,
    },
    {
      genre: 'History',
      data: HistoryBooks,
    },
    {
      genre: 'Horror',
      data: HorrorBooks,
    },
    {
      genre: 'Romance',
      data: RomanceBooks,
    },
    {
      genre: 'SciFi',
      data: SciFiBooks,
    },
  ];

  return (
    <div className='text-center py-4'>
      {categories.map((category, index) => (
        <Button
          variant='outline-success'
          className='mx-2'
          onClick={() => setList(category.data)}
          key={index}
        >
          {category.genre}
        </Button>
      ))}
    </div>
  );
};

export default BooksList;
