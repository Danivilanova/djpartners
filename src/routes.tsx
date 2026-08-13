import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { blogPosts } from "./data/blogPosts";

// Todas las rutas menos la home se cargan con `lazy` para que cada página sea
// su propio chunk: el bundle inicial no arrastra el resto del sitio.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },

      // Landing pages de campaña (noindex)
      {
        path: "lp/cuadro-de-mando",
        lazy: async () => ({ Component: (await import("./pages/lp/CuadroDeMando")).default }),
      },
      {
        path: "lp/automatizacion-procesos",
        lazy: async () => ({ Component: (await import("./pages/lp/AutomatizacionProcesos")).default }),
      },

      // Páginas de marketing
      {
        path: "tech-details",
        lazy: async () => ({ Component: (await import("./pages/TechDetails")).default }),
      },
      {
        path: "about",
        lazy: async () => ({ Component: (await import("./pages/About")).default }),
      },
      {
        path: "development-process",
        lazy: async () => ({ Component: (await import("./pages/DevelopmentProcess")).default }),
      },
      {
        path: "careers",
        lazy: async () => ({ Component: (await import("./pages/Careers")).default }),
      },
      {
        path: "collaborator-form",
        lazy: async () => ({ Component: (await import("./components/CollaboratorForm")).default }),
      },
      {
        path: "internal-team-form",
        lazy: async () => ({ Component: (await import("./components/InternalTeamForm")).default }),
      },
      {
        path: "partnership-form",
        lazy: async () => ({ Component: (await import("./components/PartnershipForm")).default }),
      },
      {
        path: "privacy-policy",
        lazy: async () => ({ Component: (await import("./pages/PrivacyPolicy")).default }),
      },

      // Blog
      {
        path: "blog",
        lazy: async () => ({ Component: (await import("./pages/Blog")).default }),
      },
      {
        path: "blog/:slug",
        lazy: async () => ({ Component: (await import("./pages/BlogPostDetail")).default }),
        getStaticPaths: () => blogPosts.map((p) => `blog/${p.slug}`),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
];
