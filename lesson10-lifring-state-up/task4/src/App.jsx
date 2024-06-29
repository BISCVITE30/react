import React from 'react';
import FilterableProductTable from './FilterableProductTable.jsx';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetable', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetable', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetable', price: '$1', stocked: true, name: 'Peas' },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
