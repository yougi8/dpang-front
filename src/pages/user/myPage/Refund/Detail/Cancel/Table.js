import styled from 'styled-components'

const Container = styled.div`

width: 72rem;

`
const Border = styled.div`

height: 1px;
width: 72rem;
background-color: black;


`

const TableBox = styled.div`

height: 12rem;
width: 72rem;

`
const Row = styled.div`

height: 6rem;
width: 72rem;
display: flex;

`
const ColHeader = styled.div`

width: 10rem;
height: 6rem;
background-color: var(--light-grey);
display: flex;
align-items: center;
justify-content: center;

`

const Col = styled.div`

height: 6rem;
width: ${(props) => props.width}


`
const DetailHeader = styled.div`

width: 72rem;
height: 5rem;
background-color: white;
display: flex;
align-items: end;

`

function Table() {

    return (
        <>
        <DetailHeader className="cm-SRegular16">취소 상세 내역</DetailHeader>
        <Container>
            <Border />
            <TableBox>
                <Row>
                    <ColHeader>상품 합계 금액</ColHeader>
                    <Col width="26rem"></Col>
                    <ColHeader>환불 예정 금액</ColHeader>
                    <Col width="26rem"></Col>
                </Row>

                <Border />

                <Row>
                    <ColHeader>환불 상태</ColHeader>
                    <Col width="62rem"></Col>
                </Row>
                <Border />

            </TableBox>




        </Container>


        </>
    )

}
export default Table;