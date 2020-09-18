import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps, Link } from '@reach/router';

const routes: Array<string> = [
  'profile',
  'services'
]

const Main: FC<RouteComponentProps> = () => {
  const [name, setName] = useState('Victor');
  const [lastname, setLastname] = useState('Caceres');
  const [age, setAge] = useState(25);
  const [num, setNum] = useState(0);

  const increment = (event: any) => setNum((numi) => numi >= 5 ? numi + 2 : numi + 1);

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
      <nav>
        {/* <Link to="/profile">Profile</Link> | { " " }
        <Link to="/services">Services</Link> */}
        {
          routes.map((route: string, index: number) => (
            <Link key={index} to={route}>{ route.toUpperCase() }</Link>
          ))
        }
      </nav>
    </>
  );
}

export default Main;
