import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/rol.enum";

export const ROLES_KEY = 'roles';
export const Roles = (rol: Role) => SetMetadata(ROLES_KEY, rol);