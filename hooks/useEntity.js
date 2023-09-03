export const useEntity = () => {
  const getDimmensions = (body) => {
    const widthBody = body.bounds.max.x - body.bounds.min.x;
    const heightBody = body.bounds.max.y - body.bounds.min.y;

    const xBody = body.position.x - widthBody / 2;
    const yBody = body.position.y - heightBody / 2;

    return {
      widthBody,
      heightBody,
      xBody,
      yBody,
    };
  };

  return {
    getDimmensions,
  };
};
