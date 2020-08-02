import * as React from 'react';
import styled from 'styled-components';
import { colors, fontSize } from '../../styles/variables.style';
import SEO from '../components/SEO';
import { Row, Col } from 'antd';
import { mediaQueries } from '../../styles/mediaQueries.style';

interface IAuthenticationLayoutProps {
  title: string;
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  Illustration: string;
}

const AuthenticationLayout = ({
  children,
  title,
  heading,
  subHeading,
  Illustration,
}: IAuthenticationLayoutProps): React.ReactElement => {
  return (
    <>
      <SEO title={title} />
      <AuthenticationLayout.Wrapper>
        <Row>
          <Col xs={0} sm={0} md={10} lg={10} xl={10}>
            <AuthenticationLayout.LeftWrapper>
              <img src={Illustration} alt="login" />
            </AuthenticationLayout.LeftWrapper>
          </Col>
          <Col xs={24} sm={24} md={14} lg={14} xl={14}>
            <AuthenticationLayout.RightWrapper>
              <AuthenticationLayout.FormInnerWrapper>
                <div className="auth-form-heading">
                  <h1>{heading}</h1>
                  <p>{subHeading}</p>
                </div>
                {children}
              </AuthenticationLayout.FormInnerWrapper>
            </AuthenticationLayout.RightWrapper>
          </Col>
        </Row>
      </AuthenticationLayout.Wrapper>
    </>
  );
};

AuthenticationLayout.Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

AuthenticationLayout.LeftWrapper = styled.div`
  background: ${colors.DARKER_GRAY};
  height: 100vh;
  border-right: 0.5px solid ${colors.PRIMARY_WEAK};
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 500px;
  }
`;

AuthenticationLayout.RightWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h1 {
    font-family: Futura bold;
    margin: 0;
  }
  & p {
    font-size: ${fontSize.sm};
  }
`;

AuthenticationLayout.FormInnerWrapper = styled.div`
  width: 80%;

  & .login-form-footer {
    display: flex;
    justify-content: space-between;
  }
  & .auth-form-heading {
    margin-bottom: 3em;
  }

  ${mediaQueries('lg')`
    width: 40%;
  `}
`;

export default AuthenticationLayout;
