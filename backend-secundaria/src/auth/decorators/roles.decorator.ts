import { SetMetadata } from "@nestjs/common";
import { Role } from "../../common/enums/rol.enum";

export const ROLES_KEY = 'roles';
export const Roles = (rol: Role) => SetMetadata(ROLES_KEY, rol);

//USANDO OBJETOS DE PARAMETROS
// export const ROLES_KEY = 'roles';
// console.log('datos recibidos en roles.decorator: ', ROLES_KEY);
// export const Roles = (rol: Role) => SetMetadata(ROLES_KEY, rol);