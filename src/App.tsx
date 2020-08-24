import React from 'react';
import { useState } from 'react';
import MemoList from 'react-memo-list';

let idAuto = 0;

function App() {
  const [todos, setTodos] = useState([
    {
      title: ' nulla magnam. ',
      id: idAuto++,
    },
    {
      title: 'officia doloremque',
      id: idAuto++,
    },
    {
      title: 'repellendus',
      id: idAuto++,
    },
    {
      title: 'us.',
      id: idAuto++,
    },
    {
      title: 'Lorem ipsum d',
      id: idAuto++,
    },
    {
      title: 'Enim, doloribus.',
      id: idAuto++,
    },
    {
      title: 'psum dolor sit amet consectetur adipisicing',
      id: idAuto++,
    },
    {
      title: 'oremque magni voluptates eveniet! Necessitatibus, nulla magna',
      id: idAuto++,
    },
    {
      title: 'Perspiciatis aliquam,',
      id: idAuto++,
    },
    {
      title: 'Enim, doloribus.',
      id: idAuto++,
    },
    {
      title: 'Lorem nim, doloribus.',
      id: idAuto++,
    },
  ]);

  return (
    <div>
      <MemoList
        data={todos}
        renderItem={({ item }) => (
          <div>
            <Todo
              item={item}
              onDel={() => {
                setTodos((td) => td.filter((i) => i.id !== item.id));
              }}
              onRandomTitle={() => {
                setTodos((td) =>
                  td.map((i) => {
                    if (i.id === item.id) {
                      return { ...i, title: 100 * Math.random() + i.title };
                    }
                    return i;
                  })
                );
              }}
            />
          </div>
        )}
        keyExtractor={(item) => item.id}
      />
    </div>
  );
}

interface Iprops {
  item: any;
  onDel: () => any;
  onRandomTitle: any;
}

const Todo = ({ item, onDel = () => {}, onRandomTitle }: Iprops) => {
  const { title } = item;
  console.log('rendering');
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={onDel}>Del</button>
      <button onClick={onRandomTitle}>RD</button>
    </div>
  );
};

export default App;
