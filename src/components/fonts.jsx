import styled from 'styled-components';
import {
  title1,
  title2,
  title3,
  largeTitle,
  caption,
  subtitle1,
  subtitle2,
  bodyText,
  smallText,
  button,
  highlight,
  quote,
} from './fonts';

const Title1 = styled.h1`
  ${title1};
`;

const Title2 = styled.h2`
  ${title2};
`;

const Title3 = styled.h3`
  ${title3};
`;

const LargeTitle = styled.h1`
  ${largeTitle};
`;

const Caption = styled.p`
  ${caption};
`;

const Subtitle1 = styled.h4`
  ${subtitle1};
`;

const Subtitle2 = styled.h5`
  ${subtitle2};
`;

const BodyText = styled.p`
  ${bodyText};
`;

const SmallText = styled.p`
  ${smallText};
`;

const Button = styled.button`
  ${button};
`;

const Highlight = styled.span`
  ${highlight};
`;

const Quote = styled.blockquote`
  ${quote};
`;

export {
  Title1,
  Title2,
  Title3,
  LargeTitle,
  Caption,
  Subtitle1,
  Subtitle2,
  BodyText,
  SmallText,
  Button,
  Highlight,
  Quote,
};
