import {compare, hash} from 'bcryptjs';

export async function hashPassword(password) {
    return await hash(password, 12);
}

export async function comparePassword(password, hashedPassword) {
    return await compare(password, hashedPassword);
}
