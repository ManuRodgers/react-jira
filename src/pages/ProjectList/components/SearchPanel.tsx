import React from 'react';

interface ISearchPanelProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchPanel: React.FunctionComponent<ISearchPanelProps> = ({
  searchText,
  setSearchText,
}: ISearchPanelProps) => {
  return <div>hello</div>;
};
