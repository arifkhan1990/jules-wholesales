import React, { useState } from 'react';
import { mockCategories } from '../data/mockCategories';
import './CategoryMenu.css';

const CategoryMenu = () => {
  const [activeMenuId, setActiveMenuId] = useState(null);

  const handleMouseEnter = (categoryId) => {
    setActiveMenuId(categoryId);
  };

  const handleMouseLeave = () => {
    setActiveMenuId(null);
  };

  return (
    <nav className="category-navigation" onMouseLeave={handleMouseLeave}>
      <ul className="top-level-menu">
        {mockCategories.map((category) => (
          <li
            key={category.id}
            className="top-level-menu-item"
            onMouseEnter={() => handleMouseEnter(category.id)}
          >
            <a href={`/category/${category.slug}`}>{category.name}</a>
            {activeMenuId === category.id && category.children.length > 0 && (
              <div className="dropdown-container">
                <div className="dropdown-panel">
                  {category.children.map((childCategory) => (
                    <div key={childCategory.id} className="dropdown-column">
                      <h3 className="dropdown-column-title">
                        <a href={`/category/${childCategory.slug}`}>{childCategory.name}</a>
                      </h3>
                      <ul className="dropdown-links">
                        {childCategory.children.map((grandchild) => (
                          <li key={grandchild.id}>
                            <a href={`/category/${grandchild.slug}`}>{grandchild.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu;
