// Question 54

function createFlexibleObject(key: string, value: string) {
    const flexibleObject = {};
    flexibleObject[key] = value;
    return flexibleObject;
};

const userSkills = createFlexibleObject("key", "value");

console.log(userSkills);

