import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button, Anchor } from '../../atoms';
import { Avatar, Textfield } from '../../molecules';
import { fontFamily } from '../../../typography';

const Wrapper = styled('fieldset')`
  font-family: ${fontFamily.primary};
  .center {
    text-align: center;
  }
`;

export default function Login() {
  return (
    <Wrapper>
      <legend>Login</legend>
      <p className="center">
        <FontAwesomeIcon icon={faUserCircle} size="4x" />
      </p>
      <p>
        <Textfield type="email" labelText="Email" id="login-email" />
      </p>

      <p>
        <Anchor href="#" title="Go to recover your password?">
          Forgot password?
        </Anchor>
        <Textfield
          type="password"
          labelText="Password"
          id="login-password"
          endSlot={
            <Button
              variant="outlined"
              rounded={true}
              isButtonIcon
              size="small"
              icon={<FontAwesomeIcon icon={faEye} />}
              onClick={() => console.log('show/hide password')}
            />
          }
        />
      </p>

      <p>
        <Button label="Login" size="large" />
      </p>

      <p>
        Do not have an account?{' '}
        <Anchor href="#" title="Create an account for free">
          Sign up
        </Anchor>
      </p>
    </Wrapper>
  );
}
