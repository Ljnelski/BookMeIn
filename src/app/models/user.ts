import { UserRole } from "./user_roles";

export class User {
    username!: string| null;
    password!: string| null;
    roles!: UserRole[] | null;
}
