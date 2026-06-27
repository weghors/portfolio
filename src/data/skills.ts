export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "tools";
}

export const skills: Skill[] = [
  { name: "React / Next.js", level: 92, category: "frontend" },
  { name: "TypeScript", level: 88, category: "frontend" },
  { name: "Vue.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "HTML / CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 82, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 78, category: "backend" },
  { name: "MongoDB", level: 72, category: "backend" },
  { name: "Figma", level: 85, category: "design" },
  { name: "UI/UX Design", level: 80, category: "design" },
  { name: "Git / GitHub", level: 88, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "AWS", level: 65, category: "tools" },
];

export const skillCategories = [
  { key: "frontend", label: "前端开发" },
  { key: "backend", label: "后端开发" },
  { key: "design", label: "设计" },
  { key: "tools", label: "工具" },
] as const;
