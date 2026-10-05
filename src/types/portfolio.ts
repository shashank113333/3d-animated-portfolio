export type CoreShape = 'torusKnot' | 'icosahedron' | 'octahedron' | 'ring' | 'sphere';
export type ThemeColor = 'cyberpunk' | 'matrix' | 'sunset' | 'cosmos';

export interface ThemeConfig {
  name: ThemeColor;
  primary: string;
  secondary: string;
  accent: string;
  bgGlow: string;
}

export interface CustomizerSettings {
  shape: CoreShape;
  theme: ThemeColor;
  wireframe: boolean;
  particleDensity: number; // e.g. 500 to 3000
  rotationSpeed: number; // e.g. 0.5 to 3
  soundEnabled: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDetails?: string;
  category: 'Full Stack' | '3D WebGL' | 'AI & ML' | 'Mobile / Apps';
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  stats?: {
    stars?: number;
    downloads?: string;
    metrics?: string;
  };
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | '3D / Design' | 'DevOps & Tools';
  level: number; // 0 to 100
  iconName: string;
  color: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'Work' | 'Education' | 'Hackathon';
}
