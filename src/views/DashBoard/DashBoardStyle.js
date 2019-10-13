import styled from "styled-components";

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  height: 16%;
  margin-top: 1rem;
  border: 1px solid purple;
`;
const ProductMain = styled(Main)`
  height: 20%;
`;

const TopCard = styled.article`
  display: inline-block;
  width: 32%;
  height: 100%;
  background-color: blue;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 1px solid pink;
  h1 {
    font-size: 13px;
    margin-left: 2%;
    margin-top: 20%;
  }
  p {
    font-size: 42px;
    margin-top: 14%;
    margin-left: 11%;
  }
`;
const ProductCards = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 70%;
    border-radius: 4px 4px 0 0;
  }

  span {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
  }
`;
const SectionHeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 8%;
  margin-top: 5%;
  border: 1px solid brown;
`;

const ProductTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const ProductList = styled.ul`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid yellow;
  li {
    display: inline-block;
    border: 1px solid gray;

    img {
      border-radius: 4px;
      width: 100%;
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
  ProductList
};
