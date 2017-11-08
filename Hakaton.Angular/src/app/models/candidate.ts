import { Project } from "./project";

export interface Candidate {
    firstName: string;
    lastName: string;
    email: string;
    linkedIn: string;
    description: string;
    points: number;

    online: boolean;
    cv?: File;
    picture: string;

    technologies: Array<string>;
    projects: Array<Project>;
}