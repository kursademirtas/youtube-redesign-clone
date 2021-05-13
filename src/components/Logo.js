import { YouTube } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link to={{ pathname: "/" }}>
      <Container>
        <YouTube color="secondary" fontSize="large" />
        YouTube
      </Container>
    </Link>
  );
};
export default Logo;
