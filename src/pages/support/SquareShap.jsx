/* eslint-disable react/prop-types */
const SquareShap = ({item}) => {
  return (
    <div className='squareShap' >
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default SquareShap;
