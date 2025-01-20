import React, { useState } from 'react';
import styled from 'styled-components';

import { AccordionItem } from '../../molecules';
import colors from '../../../colors';

interface AccordionInterface {
  items: object[];
  variant: 'horizontal' | 'vertical';
}

type WrapperProps = {
  variant: string;
};

const Wrapper = styled('div')<WrapperProps>`
  /* TODO - Set as Token */
  box-shadow: 0 0 16px 0px ${colors.primary.main};
  transform: rotate(
      ${(props) => (props.variant === 'horizontal' ? '0deg' : '-90deg')}
    )
    translate(${(props) => (props.variant === 'horizontal' ? 0 : '-50%')});

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

export default function Accordion({
  items,
  variant = 'horizontal',
}: AccordionInterface) {
  const [selectedPanel, setSelectedPanel] = useState<number | null>(null);

  const handleOnClick = (currentPanel: number) => {
    setSelectedPanel(currentPanel === selectedPanel ? null : currentPanel);
  };

  return (
    <Wrapper variant={variant}>
      {items.map(({ title, children }: any, idx: number) => {
        return (
          <AccordionItem
            key={title}
            title={title}
            idx={idx}
            selectedPanel={selectedPanel}
            onClick={handleOnClick}
          >
            {children}
          </AccordionItem>
        );
      })}
    </Wrapper>
  );
}
