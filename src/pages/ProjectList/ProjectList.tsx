import React, { useEffect, useState } from 'react';

import { SearchPanel } from './components';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList: React.FunctionComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);
  console.log('list: ', list);

  useEffect(() => {
    fetch(`${apiUrl}/projects?`).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [searchText]);
  return (
    <div>
      <SearchPanel searchText={searchText} setSearchText={setSearchText} />
    </div>
  );
};
