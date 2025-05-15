import { execSync } from "node:child_process";
import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";

dayjs.extend(utc);


export function remarkModifiedTime() {
  return (tree, file) => {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.astro.frontmatter.lastModified = dayjs()
      .utc(result.toString())
      .format("HH:mm:ss DD MMMM YYYY UTC");
  };
}
