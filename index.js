require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays
  for (const array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }

  // Add merge date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};