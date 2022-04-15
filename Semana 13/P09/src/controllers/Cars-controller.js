import { prisma } from "../helpers/utils.js";

export const GET = async function (_, reply) {
  try {
    const posts = await prisma.carro.findMany();
    return posts;
  } catch (error) {
    reply.status(500).send("Fracassou carregar os posts");
  }
};

export const POST = async (req, reply) => {
  const { name, year, image_url } = req.body;
  try {
    const post = await prisma.carro.create({
      data: {
        name,
        year,
        image_url,
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
  const { id, name, year, image_url } = req.body;
  try {
    const put = await prisma.carro.update({
      where: {
        id: id,
      },
      data: {
        name,
        year,
        image_url,
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
  console.log(id, "aqui esta o ID cego");
  try {
    const removeiten = await prisma.carro.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send("Sucesso" + removeiten);
  } catch (error) {
    reply.status(400).send("Fracassou");
  }
};
