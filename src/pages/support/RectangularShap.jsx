/* eslint-disable react/prop-types */

const RectangularShap = ({ item }) => {
  return (
    <div className="rectangularShap">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default RectangularShap;
