import styled from "styled-components";
import ReviewBox from "./ReviewBox";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 30rem);

`;

const ReviewContainer = styled.div`
  width: 72rem;
  min-height: calc(100vh);
`;

function Index() {
  return (
    <Container>
      <ContentBox>
        {/* 정보를 표시해줄 component를 호출 */}
        <ReviewContainer>
          <ReviewBox />
        </ReviewContainer>
      </ContentBox>
    </Container>
  );
}
export default Index;
