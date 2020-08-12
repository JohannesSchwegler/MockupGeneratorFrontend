export const updateObject = (oldObject: Object, updatedProperties: Object) => {
  // Replace all properties from second file with first file
    return {
    ...oldObject,
    ...updatedProperties,
  };
};
