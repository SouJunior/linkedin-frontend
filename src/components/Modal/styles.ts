import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:  rgba(0, 0, 0, 0.624);
`;

export const ContainerModal = styled.div`
    width: 928px;
    height: 234px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 4rem;
`;

export const ContainerPhrase = styled.h2`
    font-family: 'Radio Canada';
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    color: #1165BA;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    margin-bottom: 20px;
    padding: 3px 0;
    min-width: 100%;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
`;

export const DenyButton = styled.button`
    width: 78px;
    height: 38px;
    font-size: 16px;
    font-family: 'Radio Canada';
    font-weight: 400;
    line-height: 22.4px;
    color: #1165BA;
    padding: 8px 24px 8px 24px;
    gap: 8px;
    border-radius: 5px;
    border: solid 1px #1165BA;
    margin: 20px 10px 0 0 ;
`;

export const AffirmationButton = styled.button`
    width: 78px;
    height: 38px;
    font-size: 16px;
    font-family: 'Radio Canada';
    font-weight: 400;
    line-height: 22.4px;
    color: #FFFFFF;
    padding: 8px 24px 8px 24px;
    gap: 8px;
    border-radius: 5px;
    background-color: #1165BA;
    margin: 20px 0 0 10px;
`;

export const ConfirmeModal = styled.div`
    width: 1044px;
    height: 405.78px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 4rem;
`;

export const ConfirmationParagraph = styled.p`
    font-family: 'Radio Canada';
    font-size: 22px;
    font-weight: 400;
    line-height: 26.4px;
    text-align: center;
    color: #777777;
    margin: 30px 0;
`;

export const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 10px;
    right: 10px;
`;