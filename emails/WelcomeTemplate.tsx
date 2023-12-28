import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from '@react-email/components';
import { CSSProperties } from 'react';

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Wlecome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmike.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: '#fff',
};

// const heading: CSSProperties = {
//   fontSize: '32px',
// };

export default WelcomeTemplate;
