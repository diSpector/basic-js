module.exports = function createDreamTeam(members) {
  if (!(members && typeof members === 'object' && members.constructor === Array)){
    return false;
  }
  return members.filter(element => (typeof element === 'string' || element instanceof String))
  .map(name => name.trim().charAt(0).toUpperCase())
  .sort((a,b) => a.localeCompare(b)) 
  .join('');
};