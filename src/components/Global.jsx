import styled from "styled-components";

export const primaryColor = '#3b4754';
export const secondaryDark = '#29323d';
export const greyColor = '#798da3';
export const greyColor1 = '#9fafc1';


export const CustomButton = styled.button`
font-size: ${props => props.fontSize};
margin: ${props => props.margin};
padding: ${props => props.padding};
border-radius:${props => props.borderRadius};
width:${props => props.width};
color: ${props => props.color};
border:${props => props.border};
`;