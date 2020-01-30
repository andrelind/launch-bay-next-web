export type Content = {
  text: string,
  type: 'text' | 'strong' | 'icon',
};

type Needle = { start: string, end: string, type: 'text' | 'strong' | 'icon' };

export default (inText: string): Array<Content> => {
  if (!inText) {
    return [];
  }

  const replacedDegrees = inText.split('&deg;').join('°');
  const replacedLineBreaks = replacedDegrees.split('<br />').join('\n');

  let cropText = replacedLineBreaks;
  const content: Array<Content> = [];

  const needles: Needle[] = [
    { start: '<strong>', end: '</strong>', type: 'strong' },
    { start: '[', end: ']', type: 'icon' },
  ];

  while (cropText.length > 0) {
    let closestNeedle: Needle | undefined;
    let closest = 9999;

    needles.forEach(n => {
      if (!closestNeedle && cropText.indexOf(n.start) >= 0) {
        closestNeedle = n;
        closest = cropText.indexOf(n.start);
      } else {
        const i = cropText.indexOf(n.start);
        if (i >= 0 && i < closest) {
          closestNeedle = n;
          closest = i;
        }
      }
    });

    if (closestNeedle && cropText.indexOf(closestNeedle.start) >= 0) {
      content.push({
        text: cropText.substring(0, cropText.indexOf(closestNeedle.start)),
        type: 'text',
      });
      cropText = cropText.substring(
        cropText.indexOf(closestNeedle.start) + closestNeedle.start.length
      );

      content.push({
        text: cropText.substring(0, cropText.indexOf(closestNeedle.end)),
        type: closestNeedle.type,
      });
      cropText = cropText.substring(
        cropText.indexOf(closestNeedle.end) + closestNeedle.end.length
      );
    } else {
      content.push({
        text: cropText,
        type: 'text',
      });
      cropText = '';
    }
  }
  return content;
};
