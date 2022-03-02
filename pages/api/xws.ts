import { NextApiRequest, NextApiResponse } from 'next';
import { deserialize, exportAsXws } from '../../helpers/export';

export const getXws = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.lbx) {
    const { lbx } = req.query;
    const squadronXws = deserialize(lbx as string);

    if (squadronXws) {
      const xws = exportAsXws(squadronXws);
      res.json(xws);
      return;
    }
  }

  res.status(404).end();
};

export default getXws;
