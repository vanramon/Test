import { useState, useEffect, FC } from 'react';

import { Data, getData } from '../../api/auth.api';

export const BrowsePage = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    getData().then((data) => {
      setData(data);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <p>{JSON.stringify(data, null, 2)}</p>;
};
