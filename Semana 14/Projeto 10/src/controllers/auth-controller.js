import {
  comparePassword,
  createAccessToken,
  hashPassword,
  prisma,
} from "../helpers/utils.js";

export const signup = async (req, reply) => {
  const { name, email, password: pass } = req.body;

  try {
    const password = await hashPassword(pass);

    const { password: hashedPassword, ...user1 } = await prisma.user1.create({
      data: {
        name,
        email,
        password,
      },
    });

    reply.send(user1);
  } catch (error) {
    console.log(error);
    reply.status(400).send({ error: `User already exists!` });
  }
};
export const login = async (req, reply) => {
  try {
    const { email, password } = req.body;
    let user1 = await prisma.user1.findUnique({
      where: { email },
    });
    // { where: { email } }

    if (!user1) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    if (!(await comparePassword(password, user1.password))) {
      return reply.status(401).send({ error: "Invalid email or password" });
    }

    let { password: pass, ...data } = user1;
    return reply.send({
      user1: data,
      accessToken: await createAccessToken(data),
    });
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Server error!" });
  }
};
