import React from 'react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style';

interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element; // ? <- define the property not required. JSX.Element allows to call HTML elements like parameter
}

// React FC Type -> Funtional Component
const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            {props.subtitle}
        </PageTitleContainer>)
    ;
}

export default PageTitle;