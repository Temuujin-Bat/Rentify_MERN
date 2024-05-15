import { useLocation } from "react-router-dom";

export function useParamsURL() {
  return new URLSearchParams(useLocation().search);
}
