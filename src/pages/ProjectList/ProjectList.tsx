import { useMount } from 'hooks';
import React, { useEffect, useState } from 'react';
import { useHttp } from 'utils/http';

import { SearchPanel } from './components';

export const ProjectList: React.FunctionComponent = () => {
  const client = useHttp();
  const [projectList, setProjectList] = useState([]);
  console.log('projectList: ', projectList);
  const [users, setUsers] = useState([]);
  console.log('users: ', users);
  useMount(() => {
    client('users').then(setUsers);
  });
  useMount(() => {
    client('projects').then(setProjectList);
  });

  return (
    <div>
      {/* <SearchPanel searchText={searchText} setSearchText={setSearchText} /> */}
    </div>
  );
};
