/* eslint-disable react/prop-types */

const CircleShap = ({item,}) => {
  // console.log(item)
  return (
    <div className='circleShap'>
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default CircleShap;
