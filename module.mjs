// @ts-check
import { module } from "@prisma/composer";
import sveltekitService from "./service.mjs";

export default module("sveltekit-app", ({ provision }) => {
  provision(sveltekitService);
});
