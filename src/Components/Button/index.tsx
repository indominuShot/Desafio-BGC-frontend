import { AiOutlineLoading as LoadIcon } from 'react-icons/ai';
import { FaLock as LockIcon } from 'react-icons/fa';

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
      {props.disabled && (
        <div>
          <LockIcon
            style={{
              animation: 'none',
              marginLeft: '1rem',
            }}
          />
        </div>
      )}
    </Container>
  );
}
