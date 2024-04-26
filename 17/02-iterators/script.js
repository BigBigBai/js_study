// app1
const app1 = {
  nextIndex: 0,
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true };
    }

    const returnValue = { value: this.teams[this.nextIndex], done: false };
    this.nextIndex++;
    return returnValue;
  },
};

// console.log(app1.next());
// console.log(app1.next());
// console.log(app1.next());
// console.log(app1.next());
// console.log(app1.next());

// for (const team of app1) {
//   console.log(team);
// }

// app2
const app2 = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

// const iterator = app2[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

for (const team of app2) {
  console.log(team);
}
