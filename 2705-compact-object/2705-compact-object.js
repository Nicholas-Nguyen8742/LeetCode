/**
 * @param {Object} obj
 * @return {Object}
 */

var isArray = (el) => {
    return Array.isArray(el);
};

var filterNullArray = (arr) => {
    return arr.filter(Boolean).map(compactObject);
};

var compactObject = function(obj) {
    if (isArray(obj)) {
        return filterNullArray(obj);
    } else {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        for (const [key, value] of Object.entries(obj)) {
            if (isArray(value)) {
                obj[key] = filterNullArray(value);
            } else {
                if (typeof value === 'object') {
                    obj[key] = compactObject(value);
                }
                if (!value || value == null) {
                    delete obj[key];
                }
            }
        }
        return obj;
    }
};