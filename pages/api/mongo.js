import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  console.log(movies);
  res.json(movies);
};
