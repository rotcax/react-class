import React, { useEffect, useState } from 'react';

export default ({ age }) => {
  const [name, setName] = useState('Victor');
  const [lastname, setLastname] = useState('Caceres');
  const [num, setNum] = useState(0);

  const increment = (event) => setNum((numi) => numi >= 5 ? numi + 2 : numi + 1);

  useEffect(() => {
    setName('Carlos');
    setLastname('Yonusg');

    return () => {
      console.log('exit');
    }
  }, []);

  return (
    <>
      <div>{ name } { lastname }</div>
      <div>{ age }</div>
      <button onClick={increment}>click</button>
      <div>{ num }</div>
    </>
  );
}
