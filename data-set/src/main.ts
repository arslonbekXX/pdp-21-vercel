const element = document.querySelector("#user") as HTMLDivElement;

console.dir(element);

const userId = element.dataset.id;
console.log("userId = ", userId);

const idx = +element.dataset.idx!;
console.log("idx = ", idx);

const dateOfBirth = element.dataset.dateOfBirth;
console.log("dateOfBirth = ", dateOfBirth);
