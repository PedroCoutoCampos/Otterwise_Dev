import { prisma } from "../helpers/utils.js";

export const GET = async function (_, reply) {
  try {
    const posts = await prisma.car.findMany();
    return posts;
  } catch (error) {
    reply.status(500).send("Fracassou carregar os posts");
  }
};

export const POST = async (req, reply) => {
  const { name, year, brand_id, image_url } = req.body;
  try {
    const post = await prisma.car.create({
      data: {
        name,
        year,
        brand_id,
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
  const { id, name, year, brands_id, image_url } = req.body;
  try {
    const put = await prisma.car.update({
      where: {
        id: id,
      },
      data: {
        name,
        year,
        brands_id,
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
    const removeiten = await prisma.car.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send("Sucesso" + removeiten);
  } catch (error) {
    reply.status(400).send("Fracassou");
  }
};
