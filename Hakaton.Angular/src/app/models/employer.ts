import { Job } from "./job";

export interface Employer {
    name: string;
    location: string;
    email: string;
    website: string;
    linkedIn: string;
    staff: number;

    online: boolean;
    picture: string;
    jobs?: Job[];
}