import { YouTube } from "@material-ui/icons/";
import styled from 'styled-components'


const Container = styled.div`
	display:flex;
	align-items:center;
`

const Logo = () => {
  return (
    <Container>
      <YouTube color="secondary" fontSize="large" />
      YouTube
    </Container>
  );
};
export default Logo;
