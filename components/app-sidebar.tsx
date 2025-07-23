"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { IconSettings } from "@tabler/icons-react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  DatabaseZapIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavSecondary } from "./nav-secondary";
import { SettingsDialog } from "./settings-dialog";

// This is sample data.
const data = {
  teams: [
    {
      name: "Dexa Labs",
      logo: AudioWaveform,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Databases",
      url: "/database",
      icon: DatabaseZapIcon,
      isActive: true,
      items: [
        {
          title: "Details",
          url: "/dashboard/database",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  navSecondary: [{ title: "Settings", url: "#", icon: IconSettings }],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [settingsClicked, setSettingsClicked] = React.useState(false);
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary
          items={data.navSecondary}
          onClick={() => setSettingsClicked(true)}
        />
        {settingsClicked && (
          <SettingsDialog
            isOpen={settingsClicked}
            onClose={() => setSettingsClicked(false)}
          />
        )}
      </SidebarContent>
      <SidebarFooter>
        {isSignedIn && (
          <NavUser
            user={{
              firstName: user.firstName || "",
              primaryEmailAddress: user.primaryEmailAddress?.emailAddress || "",
              imageUrl: user.imageUrl,
            }}
          />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
