// @ts-check
import { module } from "@prisma/composer";
import webtrex2Service from "./service.mjs";

export default module("webtrex-2", ({ provision }) => {
  provision(webtrex2Service, { id: "webtrex2" });
});
