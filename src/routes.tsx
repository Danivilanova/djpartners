import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import CollaboratorForm from "./components/CollaboratorForm";
import InternalTeamForm from "./components/InternalTeamForm";
import PartnershipForm from "./components/PartnershipForm";
import CuadroDeMando from "./pages/lp/CuadroDeMando";
import AutomatizacionProcesos from "./pages/lp/AutomatizacionProcesos";
import { blogPosts } from "./data/blogPosts";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },

      // Landing pages de campaña (noindex)
      { path: "lp/cuadro-de-mando", element: <CuadroDeMando /> },
      { path: "lp/automatizacion-procesos", element: <AutomatizacionProcesos /> },

      // Páginas de marketing
      { path: "tech-details", element: <TechDetails /> },
      { path: "about", element: <About /> },
      { path: "development-process", element: <DevelopmentProcess /> },
      { path: "careers", element: <Careers /> },
      { path: "collaborator-form", element: <CollaboratorForm /> },
      { path: "internal-team-form", element: <InternalTeamForm /> },
      { path: "partnership-form", element: <PartnershipForm /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },

      // Blog
      { path: "blog", element: <Blog /> },
      {
        path: "blog/:slug",
        element: <BlogPostDetail />,
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
