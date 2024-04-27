import styled from '@emotion/styled';

export const PriceBlockContainer = styled.div`
    margin-top: 15px;
    width: 100%;
    min-height: 80px;
    height: 80px;
    background-color: #6e99d6;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    @media screen and (max-width: 1000px) {
        .PriceImage {
            display: none;
        }

        .PriceDetails {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const PriceImage = styled.div`
    position: absolute;
    right: 260px;
    top: 50%;
    transform: translateY(-50%);
`;

export const PriceRectangle = styled.button`
    width: 240px;
    height: 60px;
    background-color: #f39a46;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0883c;
    }
`;

export const PriceText = styled.p`
    font-size: 30px;
    font-weight: 600;
    font-style: italic;
    color: black;
    margin: 0;
`;

export const AdditionalRectangle = styled.div`
    width: 78px;
    height: 65px;
    background-color: #6e99d6;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid #643aa0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Discount = styled.p`
    font-size: 35px;
    font-weight: 600;
    color: #643aa0;
`;

export const PriceDetails = styled.div`
    margin-left: 110px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const PriceOld = styled.p`
    display: flex;
    font-weight: 600;
    margin-top: 20px;
    font-size: 20px;
    color: #793131;
`;

export const PriceNew = styled.p`
    margin: 0;
    display: flex;
    font-size: 35px;
    font-weight: 600;
    color: black;
`;
