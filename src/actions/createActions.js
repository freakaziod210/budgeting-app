const createActions = namesArray =>
  namesArray.reduce((acc, name) => {
    acc[name] = name;
    return acc;
  }, {});

export default createActions;
