import styled from "styled-components";

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  height: 16%;
  margin-top: 1rem;
`;
const ProductMain = styled(Main)`
  height: 20%;
`;

const TopCard = styled.div`
  display: inline-block;
  width: 32%;
  height: 100%;
  background-color: blue;
  background: #c4c4c4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  h3 {
    font-size: 12px;
    margin-left: 2%;
    margin-top: 20%;
  }
  p {
    font-size: 40px;
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
    text-align: center;
    padding-top: 6px;
  }
`;
const SectionHeaderContainer = styled.div`
  display: block;
  width: 100%;
  height: 8%;
  margin-top: 5%;
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
  height: 70px;
  margin-top: 0px;

  li {
    display: inline-block;
    font-size: 11px;
    max-width: 60px;

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
  ProductList,
  ProductTableHeader
};

// border: 1px solid pink;
// border-radius: 4px;
// border: 1px solid purple;
// border: 1px solid yellow;
// border: 1px solid gray;
// border: 1px solid brown;
