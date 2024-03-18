/* eslint-disable react/prop-types */
const TriangleShap = ({ item }) => {
  return (
    <div className="triangleShap">
      <ul>
        <li>{item.name}</li>
        <li>{item.age}</li>
      </ul>
    </div>
  );
};

export default TriangleShap;
