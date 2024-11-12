import { readFileSync } from "fs";

const mapping: Record<string, number> = {
  A: 0,
  B: 1,
  C: 3,
};

const answer = readFileSync("2024/01/input.txt", "utf-8")
  .split("")
  .map(String)
  .map((item) => mapping[item])
  .reduce((acc, curr) => acc + curr, 0);

console.log(answer);
