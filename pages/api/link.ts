import { canImportXws } from 'lbn-core/dist/helpers/import+export';
import { serialize } from 'lbn-core/dist/helpers/serializer';
import { NextApiRequest, NextApiResponse } from 'next';

export const getLink = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body) {
    const xws = canImportXws(JSON.stringify(req.body));
    const link = serialize(xws);

    res.json(`https://launchbaynext.app/?lbx=${link}`);
    return;
  }

  res.status(404).end();
};

export default getLink;
