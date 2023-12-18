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

// import React, { useState, useEffect } from 'react';
// import { FakeData } from '../api/FakeServer';

// interface ChildData {
//   key: string;
//   name: string;
//   children?: ChildData[] | ChildData;
// }

// interface Data {
//   key: string;
//   name: string;
//   children?: ChildData[] | undefined;
// }

// interface TreeNodeProps {
//   data: Data | ChildData;
//   onNodeClick: (key: string) => void;
//   children?: React.ReactNode;
// }

// const TreeNode: React.FC<TreeNodeProps> = ({ data, onNodeClick, children }) => {
//   const handleNodeClick = () => {
//     onNodeClick(data.key);
//   };

//   return (
//     <div>
//       <div onClick={handleNodeClick}>{data.name}</div>
//       {Array.isArray(data.children) && data.children.length > 0 && (
//         <div style={{ marginLeft: '20px' }}>
//           {(data.children as ChildData[]).map((child) => (
//             <TreeNode key={child.key} data={child} onNodeClick={onNodeClick} />
//           ))}
//         </div>
//       )}
//       {children}
//     </div>
//   );
// };

// interface ChildrenListProps {
//   children: ChildData | ChildData[];
// }

// const ChildrenList: React.FC<ChildrenListProps> = ({ children }) => {
//   const [sortedChildren, setSortedChildren] = useState<ChildData[]>(Array.isArray(children) ? children : [children]);

//   useEffect(() => {
//     const sortedChildrenData = Array.isArray(children)
//       ? [...children].sort((a, b) => a.name.localeCompare(b.name))
//       : [children];

//     setSortedChildren(sortedChildrenData);
//   }, [children]);

//   return (
//     <div>
//       <h2>Дочерние элементы:</h2>
//       <ul>
//         {sortedChildren.map((child) => (
//           <li key={child.key}>{child.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const BrowsePage: React.FC = () => {
//   const [data, setData] = useState<Data | null>(null);
//   const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);

//   useEffect(() => {
//     FakeData()
//       .then((response) => {
//         setData(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleNodeClick = (key: string) => {
//     setSelectedNodeKey(key);
//   };

//   return (
//     <div>
//       {data ? (
//         <div>
//           <div style={{ display: 'flex' }}>
//             <div style={{ flex: 1 }}>
//               <h2>Древовидная структура:</h2>
//               <TreeNode data={data} onNodeClick={handleNodeClick}>
//                 {selectedNodeKey && (
//                   <ChildrenList
//                     children={
//                       Array.isArray(data.children)
//                         ? ((data.children.find((child) => child.key === selectedNodeKey)
//                             ?.children || []) as ChildData[])
//                         : []
//                     }
//                   />
//                 )}
//               </TreeNode>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Загрузка...</div>
//       )}
//     </div>
//   );
// };

import React, { useState } from 'react';

const data = [
  {
    key: '_',
    name: 'root',
    children: [
      {
        key: '0',
        name: 'quidem molestiae enim',
        children: [
          {
            key: '0-1',
            name: 'sunt qui excepturi placeat culpa',
            children: [
              {
                key: '0-1-0',
                name: 'omnis laborum odio',
              },
              {
                key: '0-1-1',
                name: 'non esse culpa molestiae omnis sed optio',
              },
              {
                key: '0-1-2',
                name: 'molestiae voluptate non',
              },
              {
                key: '0-1-3',
                name: 'eaque aut omnis a',
              },
              {
                key: '0-1-4',
                name: 'tenetur explicabo ea',
              },
              {
                key: '0-1-5',
                name: 'temporibus molestiae aut',
              },
            ],
          },
          {
            key: '0-2',
            name: 'natus impedit quibusdam illo est',
            children: [],
          },
        ],
      },
      {
        key: '1',
        name: 'quibusdam autem aliquid et et quia',
        children: [],
      },
      {
        key: '2',
        name: 'qui fuga est a eum',
        children: [
          {
            key: '2-0',
            name: 'saepe unde necessitatibus rem',
            children: [
              {
                key: '2-0-0',
                name: 'est placeat dicta ut nisi rerum iste',
                children: [
                  {
                    key: '2-0-0-0',
                    name: 'ea voluptates maiores eos accusantium officiis tempore mollitia consequatur',
                  },
                  {
                    key: '2-0-0-1',
                    name: 'tenetur explicabo ea',
                  },
                ],
              },
            ],
          },
          {
            key: '2-1',
            name: 'distinctio laborum qui',
          },
          {
            key: '2-2',
            name: 'quam nostrum impedit mollitia quod et dolor',
          },
          {
            key: '2-3',
            name: 'consequatur autem doloribus natus consectetur',
          },
        ],
      },
      {
        key: '3',
        name: 'ab rerum non rerum consequatur ut ea unde',
        children: [],
      },
      {
        key: '4',
        name: 'ducimus molestias eos animi atque nihil',
        children: [],
      },
      {
        key: '5',
        name: 'ut pariatur rerum ipsum natus repellendus praesentium',
        children: [],
      },
    ],
  },
];

const TreeView = ({ data, onSelect }) => {
  const renderNode = (node) => {
    const handleClick = () => {
      onSelect(node);
    };

    return (
      <div key={node.key} onClick={handleClick}>
        {node.name}
      </div>
    );
  };

  return (
    <div>
      {data.map((node) => (
        <React.Fragment key={node.key}>
          {renderNode(node)}
        </React.Fragment>
      ))}
    </div>
  );
};

const ChildrenList = ({ children }) => {
  return (
    <div>
      {children.map((child) => (
        <div key={child.key}>{child.name}</div>
      ))}
    </div>
  );
};

export const BrowsePage = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>Древовидная структура:</h2>
          <TreeView data={data} onSelect={handleNodeSelect} />
        </div>
        <div style={{ flex: 2 }}>
          <h2>Дочерние элементы:</h2>
          {selectedNode && <ChildrenList children={selectedNode.children} />}
        </div>
      </div>
    </div>
  );
};


