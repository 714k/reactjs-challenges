import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Button, HeadingTag } from '../../../components';
import colors from '../../../colors';

interface AccordionInterface {
  headingLevel: string;
  items: object[];
}

const Wrapper = styled('div')`
  /* TODO - Set as Token */
  box-shadow: 0 0 16px 0px ${colors.primary.main};

  .heading {
    margin: 0;
    border-bottom: solid 1px ${colors.primary.light};
  }

  .accordion-panel {
    padding: 16px;
    margin: 0;
    color: ${colors.primary.main};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default function Accordion({ items }: AccordionInterface) {
  const [selectedPanel, setSelectedPanel] = useState<number | null>(null);

  const handleOnClick = (currentPanel: number) => {
    setSelectedPanel(currentPanel === selectedPanel ? null : currentPanel);
  };

  return (
    <Wrapper>
      {items.map(({ title, panelContent }: any, idx: number) => {
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
                onClick={() => handleOnClick(idx)}
              />
            </HeadingTag>
            {selectedPanel === idx && (
              <div
                id={`panel-${idx + 1}`}
                role="region"
                className="accordion-panel"
              >
                {panelContent}
              </div>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
}
