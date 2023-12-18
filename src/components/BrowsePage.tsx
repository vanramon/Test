// import React, { useState, useEffect } from 'react';
// import { FakeData } from '../api/FakeServer';

// interface Data {
//   key: string;
//   name: string;
//   children: {
//     key: string;
//     name: string;
//   }[];
// }

// export const BrowsePage = () => {
//   const [data, setData] = useState<Data | null>(null);

//   useEffect(() => {
//     FakeData()
//       .then((response) => {
//         setData(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <div>
//           {data.key}, {data.name}:
//           {data.children.map((child) => (
//             <div key={child.key}>{child.name}</div>
//           ))}
//         </div>
//       ) : (
//         <div>Загрузка...</div>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { FakeData } from '../api/FakeServer';

interface ChildData {
  key: string;
  name: string;
  children?: ChildData[] | ChildData;
}

interface Data {
  key: string;
  name: string;
  children?: ChildData[] | undefined;
}

interface TreeNodeProps {
  data: Data | ChildData;
  onNodeClick: (key: string) => void;
  children?: React.ReactNode;
}

const TreeNode: React.FC<TreeNodeProps> = ({ data, onNodeClick, children }) => {
  const handleNodeClick = () => {
    onNodeClick(data.key);
  };

  return (
    <div>
      <div onClick={handleNodeClick}>{data.name}</div>
      {Array.isArray(data.children) && data.children.length > 0 && (
        <div style={{ marginLeft: '20px' }}>
          {(data.children as ChildData[]).map((child) => (
            <TreeNode key={child.key} data={child} onNodeClick={onNodeClick} />
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

interface ChildrenListProps {
  children: ChildData | ChildData[];
}

const ChildrenList: React.FC<ChildrenListProps> = ({ children }) => {
  const [sortedChildren, setSortedChildren] = useState<ChildData[]>(Array.isArray(children) ? children : [children]);

  useEffect(() => {
    const sortedChildrenData = Array.isArray(children)
      ? [...children].sort((a, b) => a.name.localeCompare(b.name))
      : [children];

    setSortedChildren(sortedChildrenData);
  }, [children]);

  return (
    <div>
      <h2>Дочерние элементы:</h2>
      <ul>
        {sortedChildren.map((child) => (
          <li key={child.key}>{child.name}</li>
        ))}
      </ul>
    </div>
  );
};

export const BrowsePage: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);

  useEffect(() => {
    FakeData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleNodeClick = (key: string) => {
    setSelectedNodeKey(key);
  };

  return (
    <div>
      {data ? (
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <h2>Древовидная структура:</h2>
              <TreeNode data={data} onNodeClick={handleNodeClick}>
                {selectedNodeKey && (
                  <ChildrenList
                    children={
                      Array.isArray(data.children)
                        ? ((data.children.find((child) => child.key === selectedNodeKey)
                            ?.children || []) as ChildData[])
                        : []
                    }
                  />
                )}
              </TreeNode>
            </div>
          </div>
        </div>
      ) : (
        <div>Загрузка...</div>
      )}
    </div>
  );
};
