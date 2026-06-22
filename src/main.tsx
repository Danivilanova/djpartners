import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// vite-react-ssg gestiona el montaje en cliente y el prerender en build.
// El <head> se recoge vía el componente <Head/> (usado en SEO.tsx / LandingShell).
export const createRoot = ViteReactSSG({ routes });
