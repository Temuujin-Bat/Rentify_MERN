import merge from "lodash/merge";
import Textfield from "./TextField";

export default function ComponentsOverrides() {
  return merge(Textfield());
}
