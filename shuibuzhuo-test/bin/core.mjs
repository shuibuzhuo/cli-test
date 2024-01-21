import path from "path";
import { exists } from "./utils.mjs";

console.log(path.resolve("."));
console.log(exists(path.resolve(".")));
(async function () {
  const res = await new Promise((resolve) =>
    setTimeout(() => resolve("haha"), 1000)
  );
  console.log("ok res", res);
})();
