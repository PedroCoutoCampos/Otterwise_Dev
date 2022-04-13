import { prisma } from "../helpers/utils.js";

export const GET = async function (_, reply) {
  try {
    const get = await prisma.brand.findMany();
    return get;
  } catch (error) {
    reply.status(500).send("Não foi possível carregar os posts");
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
    reply.status(200).send("deu bom" + post);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o post");
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
    reply.status(200).send("Deu bom" + put);
  } catch (error) {
    reply.status(400).send("Não foi possível");
    console.log(error);
  }
};

export const DELETE = async (req, reply) => {
  const { id } = req.body;
  console.log(id, "aqui esta o ID cego");
  try {
    const remove = await prisma.brand.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send("Deu bom" + remove);
  } catch (error) {
    reply.status(400).send("Não foi possível", error.message);
  }
};
