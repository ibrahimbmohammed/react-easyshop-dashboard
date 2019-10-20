import styled from "styled-components";

export default styled.div`
  width: 91%;
  margin: 0 auto;
  margin-top: 75px;
  /* border: 1px solid blue; */
  height: 100vh;

  @media all and (min-width: 768px) {
    width: 75%;
    position: absolute;
    margin-left: 23%;
    height: 150vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: 1000px;
  }
`;
