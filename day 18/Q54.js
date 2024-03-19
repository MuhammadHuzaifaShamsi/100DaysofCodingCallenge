"use strict";
// Question 54
function createFlexibleObject(key, value) {
    const flexibleObject = {};
    flexibleObject[key] = value;
    return flexibleObject;
}
;
const userSkills = createFlexibleObject("key", "value");
console.log(userSkills);
