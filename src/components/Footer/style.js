import styled from 'styled-components';
import { greyColor1 } from '../Global';

export const FooterStyled=styled.div`
padding: 26px 0;
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