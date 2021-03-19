import _Input from '../../@types/_Input';
import { Container } from './styles';

export default function Input({ error, ...props }: _Input) {
  return <Container {...props} error={error}></Container>;
}
