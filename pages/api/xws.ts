import { exportAsXws } from "lbn-core/dist/helpers/import+export";
import { deserialize } from "lbn-core/dist/helpers/serializer";
import { loadSquadron } from "lbn-core/dist/helpers/unit";
import { NextApiRequest, NextApiResponse } from "next";

export const getXws = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.lbx) {
    const { lbx } = req.query;
    const squadronXws = deserialize(lbx as string);
    // FIXME!
    // Converts to Squadron just to have it converted back againg
    const squadron = loadSquadron(squadronXws);
    if (squadron) {
      const xws = exportAsXws(squadron);
      res.json(xws);
      return;
    }
  }

  res.status(404).end();
};

export default getXws;
