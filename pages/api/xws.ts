import { NextApiRequest, NextApiResponse } from "next";
import { exportAsXws } from "../../helpers/import+export";
import { deserialize } from "../../helpers/serializer";
import { loadSquadron } from "../../helpers/unit";

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
