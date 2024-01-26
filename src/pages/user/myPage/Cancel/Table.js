import styled from "styled-components";
import TableRow from "./TableRow";
import TempData from "../../../../assets/data/user/UserCancelData";

const Head = styled.div`
  height: 3rem;
  width: 72rem;
  background-color: #043277;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TableBox = styled.div`
  height: 43rem;
  width: 72rem;
`;
const Col = styled.div`
  width: ${(props) => props.width};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Table() {
  return (
    <TableBox>
      <Head className="cm-SBold18">
        <Col width="10rem">날짜/주문번호</Col>
        <Col width="9rem">유형</Col>
        <Col width="10rem">상태</Col>
        <Col width="23rem">상품명</Col>
        <Col width="10rem">상품 금액 / 수량</Col>
        <Col width="10rem">환불 예정 금액</Col>
      </Head>

      <TableRow data={TempData} />
    </TableBox>
  );
}
export default Table;
