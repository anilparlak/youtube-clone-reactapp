import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    gap:24px;
    padding: 24px 50px 100px 50px;
    color: ${({theme}) => theme.text};
`
export const Content = styled.div`
    flex: 5;
`
