const fs = require("fs");

const CLOCK = "%{{clock}}%";

date = () => new Date();

const data = fs.readFileSync("./README.md.tpl", { encoding: "utf-8" });

const time = data.replace(CLOCK, date().toString());

fs.writeFileSync("./README.md", time);