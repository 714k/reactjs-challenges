import React, { ReactElement } from 'react';

interface HeadingTagProps {
  headingLevel: string;
  classNames: string;
  children: ReactElement;
}

export default function HeadingTag({
  headingLevel,
  classNames,
  children,
}: HeadingTagProps) {
  const HeadingTag: any = `${headingLevel}`;

  return <HeadingTag className={classNames}>{children}</HeadingTag>;
}
