import * as React from 'react';
import styled from 'styled-components';
import SEO from '../../../components/SEO';

export interface IProfileProp {
  title: string;
}

const Profile = (props: IProfileProp): React.ReactElement => {
  const { title } = props;
  return (
    <>
      <SEO title={title} />
      <Profile.Wrapper>Profile</Profile.Wrapper>
    </>
  );
};

Profile.Wrapper = styled.div``;

export default Profile;
