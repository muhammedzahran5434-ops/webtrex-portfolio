// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "webtrex-2",
  deps: {},
  // The build script assembles dist/: the server, this declaration and index.html.
  // A directory build ships the tree verbatim, so index.html is read at run time
  // as a sibling of the server, and packages stay external and are traced.
  build: node({
    module: import.meta.url,
    dir: "./dist",
    entry: "./server.mjs",
    dependencies: "external",
  }),
});
