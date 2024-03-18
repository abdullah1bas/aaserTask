/* eslint-disable react/prop-types */
import React from 'react';

const List = ({ children, items }) => {
  // const itemHandler = items.map((item) =>
  //   React.cloneElement(
  //     children,
  //     {
  //       key: item.id,
  //       ...item,
  //     },
  //     'wrapper'
  //   )
  // );
  // console.log(items)
  const child = items.map(item => React.cloneElement(children, {key: item.id, item: item}))

  return <div className='list'>{child}</div>;
  // return <div className='list'>{itemHandler}</div>;
};

export default List;
