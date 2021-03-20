import { AiOutlineLoading as LoadIcon } from 'react-icons/ai';

import _Button from '../../@types/_Button';
import { Container } from './styles';

export default function Button({
  hoverColor,
  isLoading,
  children,
  ...props
}: _Button) {
  return (
    <Container {...props} hoverColor={hoverColor} isLoading={isLoading}>
      {isLoading ? <LoadIcon /> : children}
    </Container>
  );
}
