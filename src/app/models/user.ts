import { UserRole } from "./user_roles";

export class User {
    _id: string
    username!: string| null;
    password!: string| null;
    roles!: UserRole[] | null;
    email!: string | null;
}
