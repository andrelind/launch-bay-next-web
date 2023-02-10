import { canImportXws } from 'lbn-core/dist/helpers/import+export';
import { squadronFormatWarning } from 'lbn-core/dist/helpers/unique';
import { loadSquadron } from 'lbn-core/dist/helpers/unit';
import { NextApiRequest, NextApiResponse } from 'next';

export const hyperspaceLegal = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.body) {
    try {
      const xws = canImportXws(JSON.stringify(req.body));
      const squadron = loadSquadron(xws);
      if (squadron) {
        squadron.format = 'Standard';
        if (squadronFormatWarning(squadron)) {
          res.status(400).end();
          return;
        }
        res.status(200).end();
        return;
      } else {
        res.status(500).end();
        return;
      }
    } catch (error) {
      res.status(500).send({ error });
      return;
    }
  }
  res.status(404).end();
};

export default hyperspaceLegal;
