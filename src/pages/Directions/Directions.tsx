import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

export const Directions = () => {
  const dispatch = useAppDispatch();
  const directions = useAppSelector((state) => state.directions);

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
