import React from 'react'
import {
    // Add,
    // BackHand,
    // Ballot,
    // BarChart,
    // BreakfastDining,
    // CheckCircle,
    // ContentPaste,
    // Delete,
    // DinnerDining,
    // Edit,
    // FeaturedPlayList,
    // LunchDining,
    // ManageHistory,
    // MenuBook,
    Settings,
    // UploadFile,
    // Vaccines,
    FamilyRestroom,
  } from "@mui/icons-material";
  
  import {
    // AssignmentTurnedIn,
    // CardMembership,
    // Checklist,
    Dashboard,
    DocumentScannerTwoTone,
    FoodBank,
    Group,
    // ManageAccounts,
    Medication,
    // Restaurant,
    // ListAlt,
    // DescriptionOutlined,
    // HelpOutline
  } from "@mui/icons-material";
export const SidebarIcons:{[key: string]: React.ReactNode} ={
    dashboard: <Dashboard />,
    "family-profile": <FamilyRestroom />,
    "diet-management": <FoodBank />,
    "medication-management": <Medication />,
    documents: <Medication />,
    "manage-document": <DocumentScannerTwoTone />,
    "user-group": <Group />,
    master: <Group />,
    "user-management": <Group />,
    settings: <Settings />,
}
