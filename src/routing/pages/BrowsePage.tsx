import React, { useState, useEffect } from 'react';
import { getData, Data, ChildData } from '../../api/auth.api';
import '../../styles/browse.css'

type TreeNode = {
  key: string;
  name: string;
  children?: TreeNode[];
};

const TreeView = ({ data, onSelect }: { data: TreeNode[]; onSelect: (node: TreeNode) => void }) => {
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleNodeClick = (node: TreeNode) => {
    setSelectedNode(node);
    onSelect(node);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSort = () => {
    setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
  };

  const filterAndSortNodes = (nodes: TreeNode[]) => {
    let filteredNodes = nodes.filter(node => node.name.toLowerCase().includes(searchText.toLowerCase()));

    if (sortDirection === 'asc') {
      filteredNodes.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      filteredNodes.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filteredNodes;
  };

  const renderTreeNodes = (nodes: TreeNode[]) => {
    const filteredAndSortedNodes = filterAndSortNodes(nodes);

    return filteredAndSortedNodes.map(node => (
      <div key={node.key} className={`node ${selectedNode === node ? 'selected-node' : ''}`} onClick={() => handleNodeClick(node)}>
        {node.name}
        {node.children && node.children.length > 0 && (
          <div className="node-with-children">
            {renderTreeNodes(node.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="tree-view">
      <div className="tree-controls">
        <input type="text" placeholder="Search" value={searchText} onChange={handleSearch} />
        <button onClick={handleSort}>Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}</button>
      </div>
      <div className="tree-nodes">
        {renderTreeNodes(data)}
      </div>
      <div className="details">
        <h3>Выбранный родительский узел:</h3>
        {selectedNode && <div>{selectedNode.name}</div>}
        <h3>Дети:</h3>
        {selectedNode && selectedNode.children && selectedNode.children.length > 0 ? (
          <ul className="children-list">
            {selectedNode.children.map(child => (
              <li key={child.key}>{child.name}</li>
            ))}
          </ul>
        ) : (
          <p>Нет детей для отображения.</p>
        )}
      </div>
    </div>
  );
};

export const BrowsePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<TreeNode[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        if (response) {
          setData(response.children || []);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNodeSelect = (node: TreeNode) => {
    console.log('Selected node:', node);

  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <h1>Древо</h1>
      <TreeView data={data || []} onSelect={handleNodeSelect} />
    </div>
  );
};


