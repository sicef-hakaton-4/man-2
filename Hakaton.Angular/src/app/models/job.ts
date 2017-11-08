

export class Job {
    constructor(
        public id: number,
        public Name: string,
        public Type: number,
        public MinPoints: number,
        public StartAt: number,
        public FinishAt: number,
        public WorkFromHome: number,
        public Salary: number,
        public TeamSize: number
    ){}
}