import styled from "styled-components";
import DetailBox from "./DetailBox";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 51rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  width: 61rem;
  height: 51rem;
  background-color: white;
  border: 1px #cfcfcf solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;
const CategoryBox = styled.div`
  width: 55rem;
  height: 46rem;
  display: flex;
  flex-direction: column;

`;

const Box = styled.div`
  width: 55rem;
  height: 23rem;
  display: flex;
`;

function CategoryList() {

    const list = [ 
        {title: "패션", content:  ["여성의류", "남성의류", "언더웨어", "신발", "가방/지갑/잡화", "쥬얼리/시계/악세서리"]}, 
        {title: "뷰티", content:  ["스킨케어/메이크업", "향수/바디/헤어"]},
        {title: "스포츠/레저", content:  ["등산/캠핑/낚시", "구기/헬스/수영/스키", "골프클럽/의류/용품", "자전거/인라인"]},
        {title: "디지털/가전", content:  ["휴대폰/악세서리", "영상가전/TV/홈시에터", "카메라/켐코더/주변기기", "게임/주변기기", "음향가전/스피커/학습기기", "노트북/태블릿PC", "데스크탑/모니터/PC부품", "프린터/PC주변/사무기기", "계절가전/에어컨/온열기기", "주방가전/냉장고/전기밥솥", "상활가전/세탁기/청소기", "내비/블랙박스/하이패스"]},
        {title: "인테리어", content:  ["수납/정리/선반", "홈/인테리어/가드닝", "거실/주방가구", "침구/커튼/카페트", "침실가구"]},
        {title: "출산/유아동", content:  ["유아동의류/신발/가방", "분유/기저귀", "출산/유아용품/임부복", "완구/교육/교구"]},
        {title: "생활", content:  ["생활/제지/잡화", "욕실/청소/세제", "주방/식기/용기", "건강관리/실버용품", "반려동물/애완용품", "악기/취미/만들기", "문구/사무/용지", "산업/공구/안전용품", "자동차용품", "도서/음반/DVD"]},


    ]



  return (
    <Container>
      <CategoryContainer>
        <CategoryBox>
          <Box>
            <DetailBox content={list[0]}/>
            <DetailBox content={list[1]}/>
            <DetailBox content={list[2]}/>
            <DetailBox content={list[4]}/>
            <DetailBox content={list[3]}/>
          </Box>

          <Box>
          <DetailBox content={list[5]}/>
          <DetailBox content={list[6]}/>
          </Box>
        </CategoryBox>
      </CategoryContainer>
    </Container>
  );
}

export default CategoryList;
