import { Box, Drawer, Stack, Typography } from "@mui/material";
import { HEADER,NAV,NAV_MINI_WIDTH } from "../config-header-sidebar";
import { isMobileScreen } from "../../hooks/use-responsive";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarIcons } from "../Icons/Icons";

interface SidebarItem {
  title: string;
  id: string;
  to: string;
  scopeKey: string;
  children?: SidebarItem[];
}

const CustomSiteLabelBoxStyle = {
  height: HEADER.HEIGHT,
  position: "sticky",
  top: 0,
  display: "flex",
  alignItems: "center",
  pl: 2,
  // backdropFilter: "blur(4px)",
  zIndex: 9999,
  backgroundColor: "#003975",
};

const CustomSiteLabelBox = () => {
  return (
    <>
      <Box sx={CustomSiteLabelBoxStyle}>
        <Stack direction="row" gap={1} alignItems="center">
          {/* <SidebarToggler /> */}
        </Stack>
      </Box>
    </>
  );
};
export default function Sidebar() {
  const isMobile = isMobileScreen();

  const items: SidebarItem[] = [
    // {
    //   id: "dashboard",
    //   title: "Dashboard",
    //   to: "/",
    //   scopeKey: "dashboard",
    // },
    {
      id: "family-profile",
      title: "Family Profile",
      to: "/family-profile",
      scopeKey: "family_profile",
    },
    // {
    //   id: "diet-management",
    //   title: "Diet Management",
    //   to: "/diet-management",
    // },
    {
      id: "settings",
      title: "Settings",
      to: "/settings",
      scopeKey: "settings",
    },
    {
      id: "masters",
      title: "Masters",
      to: "#",
      scopeKey: "master",
      children: [
        {
          id: "user-management",
          to: "/user-management",
          title: "Users Management",
          scopeKey: "user_management",
        },
        {
          id: "role-management",
          to: "/role-management",
          title: "Role Management",
          scopeKey: "role_management",
        },
        {
          id: "members-management",
          to: "/members-management",
          title: "Members Management",
          scopeKey: "member",
        },
        {
          id: "feature",
          to: "/feature",
          title: "Features Management",
          scopeKey: "feature",
        },
        {
          id: "form-options",
          to: "/form-options",
          title: "Form Options",
          scopeKey: "form_options",
        },
        {
          id: "sos",
          to: "/sos",
          title: "SOS Notification",
          scopeKey: "sos",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>this is side bar</h1>
    </div>
  )
}
