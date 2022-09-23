import styled from 'styled-components';
import { greyColor1, greyColor3 } from '../Global';

export const FooterStyled=styled.div`
padding: 16px 0;
position: fixed;
bottom: 0;
width: 100%;
background-color: ${greyColor3};

.inner-container{
.social-icons{
img{
height: 22px;
:not(:first-child){
margin-left: 14px;
}
}
}
.copyright-text{
font-size: 14px;
color: ${greyColor1};
}
}
`