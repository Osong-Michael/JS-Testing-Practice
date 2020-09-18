const analyze = (array) => {
  const object = {};
  object.average = array.reduce((a, b) => a + b, 0) / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;

  return object;
};

export default analyze;