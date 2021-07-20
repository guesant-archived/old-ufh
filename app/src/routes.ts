import { Ruty } from "ruty";

const { route } = Ruty.configure();

const ROUTE_HOME = route("/").build();
const ROUTE_SETTINGS = route("/settings").build();

export { ROUTE_HOME, ROUTE_SETTINGS };
