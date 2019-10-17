import styled from "styled-components";

export default styled.div`
  width: 91%;
  margin: 0 auto;
  margin-top: 75px;
  /* border: 1px solid blue; */
  height: 100vh;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    width: 80%;
    overflow: hidden;
    border: 1px solid blue;
  }
`;
