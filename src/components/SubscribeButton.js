import styled from "styled-components";

const Button = styled.button`
  width: 150px;
  text-align: center;
  height: 50px;
  padding: 1rem 1rem;
  background-color: #ff0000;
  border: none;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const SubscribeButton = ({ subscribers }) => {
  return <Button>Subscribe {subscribers}</Button>;
};

export default SubscribeButton;
