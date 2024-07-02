import { hash, hashSync } from "bcrypt"; //2
import { PrismaClient } from "@prisma/client"; //3

const prisma = new PrismaClient();

export async function POST(req) {
  //1
  try {
    const { email, name, password } = await req.json(); //1
    // const hashedPassword = await hash(password, 10);
    const hashedPassword = hashSync(password, 10); //2

    const newUser = await prisma.user.create({
      //3
      data: {
        //1
        email, //1
        name, //1
        password: hashedPassword, //2
      },
    });

    return Response.json({
      msg: "User Created !!",
      newUser,
    });
  } catch (err) {
    return Response.json(err, { status: 500 });
  }
}
