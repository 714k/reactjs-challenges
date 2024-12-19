import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import colors from '../../../colors';
import { Button } from '../../atoms';
import { HeadingTag } from '../../atoms';

export interface AccordionItemInterface {
  title: string;
  idx: number;
  onClick: Function;
  selectedPanel: number | null;
  children: ReactElement;
}

export default function AccordionItem({
  title = 'Item 1',
  idx = 1,
  onClick,
  selectedPanel = 1,
  children,
}: AccordionItemInterface) {
  return (
    <div key={title}>
      <HeadingTag headingLevel="h3" classNames="heading">
        <Button
          label={title}
          endSlot={
            <FontAwesomeIcon
              className="endSlot"
              icon={faPlus}
              color={colors.primary.light}
            />
          }
          onClick={() => onClick(idx)}
        />
      </HeadingTag>
      {selectedPanel === idx && (
        <div id={`panel-${idx + 1}`} role="region" className="accordion-panel">
          {children}
        </div>
      )}
    </div>
  );
}
