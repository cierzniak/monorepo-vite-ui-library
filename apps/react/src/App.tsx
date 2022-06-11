import { useState } from 'react';
import { Button } from '@my-namespace/ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>primary button test</Button>
      <Button type={'secondary'}>secondary button test</Button>
      <Button
        type={'info'}
        onClick={() => {
          // eslint-disable-next-line no-alert
          alert('Info button clicked!');
        }}
      >
        Click me!
      </Button>
      <br />
      <Button
        type={'warning'}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </Button>
    </>
  );
}

export default App;
