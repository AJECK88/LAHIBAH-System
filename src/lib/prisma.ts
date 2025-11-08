import { PrismaClient} from '@prisma/client';

const PrismaClientSingleton = () =>{
    return new PrismaClient()
}


declare const globalThis: {
  PrismaGlobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global;

const prisma = globalThis.PrismaGlobal ??  PrismaClientSingleton();
export default prisma;
if (process.env.NODE_ENV !== "production") globalThis.PrismaGlobal = prisma;
