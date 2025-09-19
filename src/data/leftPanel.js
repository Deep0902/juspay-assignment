// Dashboard section
export const dashboardMenuItems = [
  {
    id: "default",
    label: "Default",
    type: "item",
  },
  {
    id: "ecommerce",
    label: "eCommerce",
    type: "expandable",
  },
  {
    id: "projects",
    label: "Projects",
    type: "expandable",
  },
  {
    id: "onlineCourses",
    label: "Online Courses",
    type: "expandable",
  },
];

// Pages section
export const pagesMenuItems = [
  {
    id: "userProfile",
    label: "User Profile",
    type: "expandable",
    children: [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
      { id: "campaigns", label: "Campaigns" },
      { id: "documents", label: "Documents" },
      { id: "followers", label: "Followers" },
    ],
  },
  {
    id: "account",
    label: "Account",
    type: "expandable",
  },
  {
    id: "corporate",
    label: "Corporate",
    type: "expandable",
  },
  {
    id: "blog",
    label: "Blog",
    type: "expandable",
  },
  {
    id: "social",
    label: "Social",
    type: "expandable",
  },
];
