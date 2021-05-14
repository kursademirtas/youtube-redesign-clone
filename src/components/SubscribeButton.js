import shortNumber from "short-number";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;
  text-align: center;
  padding: 1rem 1rem;
  height: 50px;
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

  @media (max-width: 640px) {
    background-color: transparent;
    color: #ff0000;
    width: auto;
    height: auto;
    font-weight: 600;

    span {
      display: none;
    }
  }
`;
const SubscribeButton = ({ subscribers }) => {
  
  return (
    <Button>
      Subscribe <span>{subscribers ? shortNumber(subscribers) : 0}</span>
    </Button>
  );
};

export default SubscribeButton;
