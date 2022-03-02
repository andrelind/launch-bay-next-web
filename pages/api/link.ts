import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from '../../helpers/export';
import { xwsFromString } from '../../helpers/import';

export const getLink = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body) {
    const xws = await xwsFromString(JSON.stringify(req.body));

    if (xws) {
      const link = serialize(xws);
      res.json(`https://launchbaynext.app/?lbx=${link}`);
      return;
    }
  }

  res.status(404).end();
};

export default getLink;
