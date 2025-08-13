export const mockCategories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    children: [
      {
        id: 11,
        name: 'Phones & Accessories',
        slug: 'phones-accessories',
        children: [
          { id: 111, name: 'Smartphones', slug: 'smartphones', children: [] },
          { id: 112, name: 'Cases & Covers', slug: 'cases-covers', children: [] },
          { id: 113, name: 'Chargers & Cables', slug: 'chargers-cables', children: [] },
        ],
      },
      {
        id: 12,
        name: 'Computers & Laptops',
        slug: 'computers-laptops',
        children: [
          { id: 121, name: 'Laptops', slug: 'laptops', children: [] },
          { id: 122, name: 'Desktops', slug: 'desktops', children: [] },
          { id: 123, name: 'Monitors', slug: 'monitors', children: [] },
        ],
      },
      {
        id: 13,
        name: 'Audio',
        slug: 'audio',
        children: [
          { id: 131, name: 'Headphones', slug: 'headphones', children: [] },
          { id: 132, name: 'Speakers', slug: 'speakers', children: [] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Fashion',
    slug: 'fashion',
    children: [
      {
        id: 21,
        name: "Men's Fashion",
        slug: 'mens-fashion',
        children: [
          { id: 211, name: 'Shirts', slug: 'shirts', children: [] },
          { id: 212, name: 'Pants', slug: 'pants', children: [] },
          { id: 213, name: 'Shoes', slug: 'shoes', children: [] },
        ],
      },
      {
        id: 22,
        name: "Women's Fashion",
        slug: 'womens-fashion',
        children: [
          { id: 221, name: 'Dresses', slug: 'dresses', children: [] },
          { id: 222, name: 'Handbags', slug: 'handbags', children: [] },
          { id: 223, name: 'Jewelry', slug: 'jewelry', children: [] },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Home & Garden',
    slug: 'home-garden',
    children: [
      { id: 31, name: 'Furniture', slug: 'furniture', children: [] },
      { id: 32, name: 'Lighting', slug: 'lighting', children: [] },
      { id: 33, name: 'Gardening Tools', slug: 'gardening-tools', children: [] },
    ],
  },
  {
    id: 4,
    name: 'Books',
    slug: 'books',
    children: [], // A top-level category with no children
  },
];
