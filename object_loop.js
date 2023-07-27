var memberObject = {
    manager: "pogle",
    developer: "graphittie",
    designer: "leezhce",
};

console.group("object group");
for(var key in memberObject) {
    console.log(key, ":",memberObject[key]);
}
console.groupEnd("object group");