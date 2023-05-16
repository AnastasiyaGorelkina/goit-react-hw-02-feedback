import styled from '@emotion/styled';

const Button = styled.button`
  display: inline-block;
  background: #1cc3d6;
  border: none;
  width: 100px;
  height: 35px;
  margin-left: 20px;
  border-radius: 15px;
  color: white;
  font-size: 17px;
  box-shadow: 5px 10px 20px 2px black;

  &:hover {
    transform: scale(1.1);
    background: #21358c;
  }
`;

export default Button;