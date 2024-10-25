/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
  const result = [];
  const set = new Set(folder);
  for (const f of folder) {
    let isSubfolder = false;
    let prefix = f;

    while (prefix !== "") {
      const searchPosition = prefix.lastIndexOf("/");
      if (searchPosition === -1) {
        break;
      }

      prefix = prefix.substring(0, searchPosition);

      if (set.has(prefix)) {
        isSubfolder = true;
        break;
      }
    }

    if (!isSubfolder) {
      result.push(f);
    }
  }
  
  
  return result;
};
