import { prisma } from "../helpers/utils.js";

export const GET = async function (_, reply) {
  try {
    const get = await prisma.brand.findMany();
    return get;
  } catch (error) {
    reply.status(500).send("Fracassou carregar os posts");
  }
};

export const POST = async (req, reply) => {
  const { name } = req.body;
  try {
    const post = await prisma.brand.create({
      data: {
        name,
      },
    });
    reply.send(post);
    reply.status(200).send("Sucesso" + post);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Fracassou criar o post");
  }
};

export const PUT = async (req, reply) => {
  const { id, name } = req.body;
  try {
    const put = await prisma.brand.update({
      where: {
        id: id,
      },
      data: {
        name,
      },
    });
    reply.status(200).send("Sucesso" + put);
  } catch (error) {
    reply.status(400).send("Fracassou");
    console.log(error);
  }
};

export const DELETE = async (req, reply) => {
  const { id } = req.body;
  console.log(id, "ID cego");
  try {
    const remove = await prisma.brand.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send("Sucesso" + remove);
  } catch (error) {
    reply.status(400).send("Fracassou", error.message);
  }
};
