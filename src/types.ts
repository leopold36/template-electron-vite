export interface Project {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface ElectronAPI {
  projects: {
    getAll: () => Promise<Project[]>;
    create: (name: string, description?: string) => Promise<Project>;
    get: (id: number) => Promise<Project>;
  };
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}