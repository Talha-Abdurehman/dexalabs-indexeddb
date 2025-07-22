import React, { ReactNode } from "react";
import Sidebar from "@/app/components/ui/Sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <section>
        <Sidebar>{children}</Sidebar>
      </section>
    </div>
  );
};

export default layout;
