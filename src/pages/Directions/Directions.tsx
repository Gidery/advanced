import { useDispatch, useSelector } from 'react-redux';

export const Directions = () => {
  const dispatch = useDispatch();
  const directions = useSelector((state) => state.directions);

  return (
    <div>
      Directions
      {directions.length > 0 &&
        directions.map((direction) => (
          <div>
            {`
              ${direction.name}
              ${direction.start} - ${direction.end}
            `}
          </div>
        ))}
    </div>
  );
};
