import styled from "styled-components";
const dashboarWrapper = styled.div`
  width: 70%;
  display: flex;
`;
const Main = styled.section`
  display: flex;
  justify-content: space-between;
  height: 16%;
  margin-top: 1rem;

  @media all and (min-width: 768px) {
    width: 100%;
    height: 26%;
  }
`;
const ProductMain = styled(Main)`
  height: 20%;

  @media all and (min-width: 768px) {
    width: 100%;
    height: 35%;
    margin-bottom: -10%;
  }
`;

const TopCard = styled.div`
  display: inline-block;
  width: 32%;
  height: 100%;
  background-color: blue;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: transparent;
  @media all and (min-width: 768px) {
    width: 230px;
    height: 150px;
    display: flex;
    background: transparent;

    div {
      margin-left: -5px;
    }
  }
  h3 {
    font-size: 12px;
    margin-left: 22%;
    margin-top: 20%;
    @media all and (min-width: 768px) {
      font-size: 22px;
      margin-left: 2%;
      margin-top: 20%;
    }
  }
  p {
    font-size: 40px;
    margin-top: 14%;
    margin-left: 11%;
  }
  div {
    width: 50%;
    margin-right: 40px;
  }
`;
const ProductCards = styled.div`
  position: relative;
  width: 30%;
  height: 80%;
  max-height: 150px;
  background-image: url(${props => props.pic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media all and (min-width: 768px) {
    height: 50%;
    padding-bottom: -30px;
  }
`;
const SectionHeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 8%;
  margin-top: 8%;

  h2 {
    font-size: 18px;
    font-weight: 600;
    font-family: montserrat;
    margin-top: 15px;
  }
  span {
  }
  @media all and (min-width: 768px) and (max-width: 1440px) {
    margin-top: -8%;
    h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: montserrat;
      margin-top: 15px;
    }
    div,
    svg {
      width: 30%;
      height: 40%;
      display: none;
    }
  }
`;

const ProductTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  background: #c4c4c4;
  border-radius: 4px;
  ul:nth-child(even) {
    background: white;
  }
`;
const ProductTableHeader = styled.ul`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 0.7rem;
  padding: 0 5px;
`;

const ProductList = styled(ProductTableHeader)`
  border: 1px solid yellow;
  height: 70px;
  margin-top: 0px;
  margin-left: 0px;
  font-size: 0.7rem;
  span {
    display: inline-block;
    width: 18%;
    height: 90%;
    background-image: url(${props => props.pic});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px 5px 5px 5px;
  }

  div {
    font-size: 11px;
    max-width: 70px;
    border: 1px solid red;
  }

  @media all and (min-width: 768px) {
    justify-content: space-between;
    div {
      justify-content: center;
      border: 1px solid brown;
    }
  }
`;

export {
  Main,
  TopCard,
  ProductCards,
  SectionHeaderContainer,
  ProductMain,
  ProductTable,
  ProductList,
  ProductTableHeader
};

// border: 1px solid pink;
// border-radius: 4px;
// border: 1px solid purple;
// border: 1px solid yellow;
// border: 1px solid gray;
// border: 1px solid brown;
