import * as React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

export interface IOverviewProp {
  title: string;
}

const Overview = (props: IOverviewProp): React.ReactElement => {
  const { title } = props;
  return (
    <>
      <SEO title={title} />
      <Overview.Wrapper>Overview</Overview.Wrapper>
    </>
  );
};

Overview.Wrapper = styled.div`
  padding: 10px;
  background: #fff;
`;

export default Overview;
