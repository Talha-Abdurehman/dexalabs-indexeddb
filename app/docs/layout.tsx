// app/docs/layout.tsx
import "nextra-theme-docs/style.css";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout
        pageMap={await getPageMap()}
        darkMode={true}
        navbar={<Navbar logo={<b>Dexa Labs</b>} />}
        footer={<Footer>MIT {new Date().getFullYear()} © Dexa Labs.</Footer>}
        sidebar={{ autoCollapse: true }}
        docsRepositoryBase="https://github.com/Talha-Abdurehman/dexalabs/app/docs"
      >
        {children}
      </Layout>
    </ThemeProvider>
  );
}
