import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;

`;

export const Avatar = styled.img`
  width:${props =>props.size};
  height:${props =>props.size};
  border-radius:${props =>props.size};
  background-color:orange;
`

export const NameTitle = styled.span`
  font-weight: bold;
  font-size: 26px;
  line-height: 33px;
  color: #19202C;

`

export const Text = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: #C2C2C2;
`
