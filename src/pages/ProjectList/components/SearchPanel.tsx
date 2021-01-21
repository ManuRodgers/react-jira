import React, { useEffect, useMemo, useState } from 'react';
import { matchPartialString } from 'utils';

interface ISearchPanelProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}
export interface IUser {
  name: string;
  userId: string;
}
export const SearchPanel: React.FunctionComponent<ISearchPanelProps> = ({
  searchText,
  setSearchText,
}: ISearchPanelProps) => {
  const [users, setUsers] = useState<IUser[]>([
    { name: 'Manu', userId: '20' },
    { name: 'Tim', userId: '21' },
  ]);

  const filteredUsers = useMemo(() => {
    const userNames = users.map(({ name }) => name);
    const filteredUserNames = matchPartialString(userNames, searchText);
    return users.filter(({ name }) => filteredUserNames.includes(name));
  }, [searchText, users]);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <select name="responder">
        <option value="">负责人</option>
        {filteredUsers.map(({ name, userId }) => (
          <option key={userId} value={userId}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
