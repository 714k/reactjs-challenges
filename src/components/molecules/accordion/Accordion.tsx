import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../../atoms/button/Button';
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

    button {
      text-align: left;
    }
  }

  .accordion-panel {
    padding: 16px;
    margin: 0;
    color: ${colors.primary.main};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default function Accordion({ headingLevel, items }: AccordionInterface) {
  const HeadingTag: any = `${headingLevel}`;
  return (
    <Wrapper>
      {items.map(({ title, panel }: any) => {
        return (
          <>
            <HeadingTag className="heading">
              <Button
                label={title}
                endIcon={
                  <FontAwesomeIcon
                    className="endIcon"
                    icon={faPlus}
                    color={colors.primary.light}
                  />
                }
              />
            </HeadingTag>
            <div role="region" className="accordion-panel">
              {panel}
            </div>
          </>
        );
      })}
    </Wrapper>
  );
}
