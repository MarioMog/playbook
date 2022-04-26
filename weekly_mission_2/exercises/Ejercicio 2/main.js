const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    rate: 50,
    city: "Veracruz",
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    rate: 100,
    city: "Sonora",
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log("\nExplorers's name");

explorers.forEach((explorer) => console.log(explorer.name));
console.log("\nExplorers's stack");
explorers.forEach((explorer) => {
  console.log(explorer.name);
  explorer.stack.map((tech) => console.log(tech));
});
console.log("\nList of stack:");
const stack = [];
explorers.forEach((explorer) =>
  explorer.stack.map((tech) => {
    stack.push(tech);
  })
);
console.log(stack);
console.log("\nExplorer that knows JS:");
explorers.forEach((explorer) => {
  if (explorer.stack.includes("js")) console.log(explorer.name);
});
console.log("\nExplorer that live in CDMX:");
console.log(explorers.find((explorer) => explorer.city == "CDMX").name);

console.log(
  `\nExercises  completed: ${explorers.reduce(
    (current, actual) => (current += actual.exercises_completed),
    0
  )}`
);

console.log(
  "\nAtleast 1 explorer have finished mission frontend: ",
  explorers.some((explorer) => explorer.missions.frontend.exercisesFinished)
);
console.log(
  "\nEvery explorers have finished mission onboarding: ",
  explorers.every((explorer) => explorer.missions.onboarding.exercisesFinished)
);
