export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "web" | "app" | "design";
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "电商平台",
    description: "全栈电商网站，支持商品浏览、购物车、订单管理和支付功能。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20website%20dashboard%20with%20products%20warm%20lighting%20minimalist%20design&image_size=landscape_16_9",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    link: "/ecommerce",
    github: "#",
  },
  {
    id: 2,
    title: "任务管理应用",
    description: "高效的项目管理工具，支持看板视图、团队协作和实时同步。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=task%20management%20app%20kanban%20board%20modern%20interface%20dark%20theme%20productivity&image_size=landscape_16_9",
    tags: ["Vue.js", "TypeScript", "Firebase"],
    category: "web",
    link: "/task-manager",
    github: "#",
  },
  {
    id: 3,
    title: "健身追踪 App",
    description: "移动端健身应用，记录运动数据、制定训练计划、追踪进步。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fitness%20tracking%20mobile%20app%20workout%20stats%20modern%20mobile%20ui%20health&image_size=portrait_4_3",
    tags: ["React Native", "Expo", "GraphQL"],
    category: "app",
    link: "/fitness",
    github: "#",
  },
  {
    id: 4,
    title: "品牌视觉设计",
    description: "为初创公司打造完整的品牌视觉识别系统，包含Logo、色彩和字体规范。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=brand%20identity%20design%20logo%20mockup%20elegant%20minimal%20stationery%20gold%20accents&image_size=landscape_16_9",
    tags: ["Figma", "Illustrator", "Branding"],
    category: "design",
    link: "/brand-design",
  },
  {
    id: 5,
    title: "数据可视化仪表盘",
    description: "企业级数据分析平台，交互式图表和实时数据更新。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20analytics%20charts%20dark%20mode%20modern%20saas%20interface&image_size=landscape_16_9",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    category: "web",
    link: "/dashboard",
    github: "#",
  },
  {
    id: 6,
    title: "社交平台设计",
    description: "社交媒体应用的完整UI/UX设计，注重用户体验和互动性。",
    image:
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=social%20media%20app%20ui%20design%20mobile%20interface%20modern%20clean%20user%20profile&image_size=portrait_4_3",
    tags: ["Figma", "UI/UX", "Prototype"],
    category: "design",
    link: "/social-design",
  },
];

export const projectCategories = [
  { key: "all", label: "全部" },
  { key: "web", label: "网站" },
  { key: "app", label: "应用" },
  { key: "design", label: "设计" },
] as const;
