import styled from 'styled-components';
import './ToggleSwitch.css';

const Label = styled.label`
  display: inline-block;
  margin: 0.5em;
  padding: 4px 6px;
  border-radius: 5px;
  width: auto;
  &:focus-within {
    box-shadow: 0 0 0 2px blue;
  }
  &:hover {
    background-color: aliceblue;
  }
`;

const Checkbox = styled.input`
  &[role='switch'] {
    opacity: 0;
    position: absolute;
    &:not(:checked) ~ .state .on,
    &:checked ~ .state .off {
      display: none;
    }
    &:checked ~ .state .indicator {
      left: 20px;
      border-color: #008cff;
      background-color: #008cff;
      opacity: 1;
    }
  }
`;

const State = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  user-select: none;
  padding: 4px;
`;

const Container = styled.span`
  position: relative;
  top: 0;
  display: inline-block;
  border: 2px solid #ccc;
  width: 40px;
  height: 20px;
  border-radius: 11px;
  margin-right: 4px;
`;

const StateIndicator = styled.span`
  position: relative;
  top: 0px;
  left: 0px;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 9px;
  width: 16px;
  height: 16px;
  box-shadow: 0 0 8px #ccc;
  background: white;
`;

const Toggle = () => {
  return (
    <Label htmlFor="toggle-switch">
      <Checkbox type="checkbox" id="toggle-switch" role="switch" />
      <State className="state">
        <Container className="container">
          <StateIndicator className="indicator"></StateIndicator>
        </Container>
        <span className="on" aria-hidden="true">
          Onorificus
        </span>
        <span className="off" aria-hidden="true">
          Offitaculus
        </span>
      </State>
    </Label>
  );
};

export const ToggleSwitch = () => {
  return (
    <Label htmlFor="toggle-switch">
      <Checkbox type="checkbox" id="toggle-switch" role="switch" />
      <State className="state">
        <Container className="container">
          <StateIndicator className="indicator"></StateIndicator>
        </Container>
        <span className="on" aria-hidden="true">
          Onorificus
        </span>
        <span className="off" aria-hidden="true">
          Offitaculus
        </span>
      </State>
    </Label>
  );
};
