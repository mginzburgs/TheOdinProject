const node = (value, nextNode = null) => {
  return {
    value: value,
    nextNode: nextNode,
  };
};

export default node;
