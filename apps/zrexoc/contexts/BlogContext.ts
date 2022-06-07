import React from 'react';

interface IBlogContext {
  selected: string;
  selectPost: (postName: string) => any;
}

const defaultValue: IBlogContext = {
  selected: '',
  selectPost: (postName) => (defaultValue.selected = postName),
};

export const BlogContext = React.createContext<IBlogContext>(defaultValue);
