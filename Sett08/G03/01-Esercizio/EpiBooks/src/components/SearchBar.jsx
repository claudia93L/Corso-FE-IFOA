import { Form } from 'react-bootstrap';

const [input, setInput] = useState('');

const SearchBar = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>Search your book by title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Harry Potter'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
