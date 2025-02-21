import { University } from "./university";
export class universitylist {
    university: University[] = [];
    addUniversity (a: University) {
        this.university.push(a);
    }
    sortByfaculty() {
        this.university.sort((a, b) => a.faculty.localeCompare(b.faculty));
    }

    getGroupedByFaculty() {
        return this.university.reduce((acc, item) => {
            if (!acc[item.faculty]) {
                acc[item.faculty] = [];
            }
            acc[item.faculty].push(item);
            return acc;
        }, {} as Record<string, University[]>);
    }
}