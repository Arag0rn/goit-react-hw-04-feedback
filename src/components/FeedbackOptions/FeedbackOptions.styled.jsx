import styled from 'styled-components';

export const BtnWraper = styled.div`
display: flex;
justify-content: center;
gap: 10px;
`

export const ButtonStyled = styled.button`
border-radius: 40px;
width: 70%;
padding: 8px;
margin-bottom: 24px;
background-color: #30d5c8;
color: #f3f3f3;
font-size: 16px;
font-weight: 700;
line-height: 1.13;
letter-spacing: -0.16px;
text-transform: uppercase;
border:none;
&:hover {
  scale: 105%;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
`