import styled from 'styled-components';
import ToggleComponent from '../Toggle';

export const Container = styled.div`
    grid-area: MH;
    background: ${props => props.theme.colors.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.white};
`;
export const Welcome = styled.h3``;
export const UserName = styled.span``;
export const Toggle = styled(ToggleComponent)`
    @media(max-width: 600px) {
        display: none;
    }
`;