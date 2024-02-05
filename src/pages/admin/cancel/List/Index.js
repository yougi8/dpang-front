import styled from "styled-components";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "components/common/Dropdown";
import DataTable from "components/common/AdminDataTable";
import data from "assets/data/admin/AdminCancelData";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GET_cancel_list } from "@api/cancel";

const Index = () => {
  const navigate = useNavigate();
  //  상태 저장 : 예정, 진행, 종료
  const [index, setIndex] = useState("");
  //서버로부터 받아올 값을 저장해놓을 리스트
  const [cancelList, setCancelList] = useState([]);
  //필터링을 해줄 dropdown 박스의 값. 첫 값은 이름, 뒤에 두 값은 필터링에 들어갈 value
  const dropdownValue = ["취소 상태", "취소요청", "취소승인"];

  const [val, setVal] = useState({
    userId: "",
    startDate: "",
    endDate: "",
    page: 0,
    size: 10,
    sort: "",
  });

  //서버로부터 데이터 리스트를 가져올 API 호출
  useEffect(() => {
    GET_cancel_list(val)
      .then((data) => {
        console.log(data, "성공했다!!");
      })
      .catch((error) => {
        console.log(error, "비사앙아아아앙");
      });
  }, [val]);

  const columns = [
    { name: "id", label: "번호", options: { sort: false } },
    {
      name: "id",
      label: "결제일 | 주문번호",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {
          //ID를 기준으로 데이터 찾기
          const rowData = data.find((row) => row.id === value);
          //날짜와 주문 번호를 가져옴
          const date = rowData["date"];
          const ordernum = rowData["ordernum"];

          return (
            <div>
              <p>{date}</p>
              <p>{ordernum}</p>
            </div>
          );
        },
      },
    },
    { name: "name", label: "이름" },
    {
      name: "id",
      label: "상품 정보",
      options: {
        sort: false,
        customBodyRender: (value, tableMeta) => {
          //ID를 기준으로 데이터 가져옴
          const rowData = data.find((row) => row.id === value);
          const img = rowData["itemImg"];
          const name = rowData["itemName"];

          return (
            //이미지와 상품명 표시
            <div
              style={{ display: "flex", height: "6rem", alignItems: "center" }}
            >
              <img style={{ width: "5rem" }} src={img} />
              <p>{name}</p>
            </div>
          );
        },
      },
    },
    {
      name: "status",
      label: "취소 상태",
      options: {
        sort: false,
        customBodyRender: (value) => {
          //상태에 따라 다른 색
          let color;
          if (value === "취소승인") {
            color = "var(--navy)";
          } else {
            color = "var(--yellow)";
          }

          return <div style={{ color: color }}>{value}</div>;
        },
      },
    },

    {
      name: "id",
      label: "상태 관리하기",
      options: {
        customBodyRender: (value, tableMeta) => {
          const rowData = data.find((row) => row.id === value);
          const val = rowData["status"];

          //취소 요청인 경우에만 버튼 보여준다
          return val === "취소요청" ? <Button>승인</Button> : null;
        },
      },
    },
  ];
  const handleRowClick = (rowData) => {
    //ID값 전달 위해 url에 ID값 추가
    navigate(`/admin/cancel/${rowData[0]}`);
  };

  //선택한 드롭 박스의 값을 저장하기 위한 state 변수
  const [selectedCategory, setSelectedCategory] = useState(dropdownValue[0]);
  const handleCategoryChange = (newCategory) => {
    //드롭다운 박스에서 가져온 값으로 카테고리를 설정
    setSelectedCategory(newCategory);
  };

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 취소 관리</PageName>
        {/* 검색창, 취소 상태 필터링 박스 */}
        <FilterSection>
          {/* 취소 상태 드롭다운, 검색창*/}
          <SearchWrap>
            {/* 카테고리 선택 드롭다운*/}
            <Dropdown
              value={dropdownValue}
              width={"10rem"}
              onChange={handleCategoryChange}
            />
            {/* 검색창 */}
            <Paper
              component="form"
              sx={{
                p: "0rem 1rem",
                display: "flex",
                alignItems: "center",
                width: "25rem",
                height: "3rem",
              }}
            >
              {/* 검색어 입력창 */}
              <InputBase
                sx={{ ml: 1, flex: 1, height: "100%" }}
                placeholder="검색어를 입력해주세요"
                inputProps={{ "aria-label": "검색어를 입력해주세요" }}
              />
              {/* 검색 버튼 (돋보기) */}
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </SearchWrap>
        </FilterSection>
        <ListSection>
          {/* 공용 컴포넌트 호출 */}
          <DataTable
            data={data}
            columns={columns}
            onRowClick={handleRowClick}
            filterValue={selectedCategory}
            index={"status"}
            checkBoxCheck={false}
            placeholder={dropdownValue[0]}
          />
        </ListSection>
      </Wrap>
    </>
  );
};

export default Index;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  align-items: center;
`;
const FilterSection = styled.div`
  display: flex;
  width: 88.9375rem;
  padding: 1.0625rem 7.5rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: row;
  align-items: center;
  gap: 28.9rem;
`;
const SearchWrap = styled.div`
  display: flex;
  gap: 0.875rem;
  align-items: center;
`;
const ListSection = styled.div`
  display: flex;
  width: 88.9375rem;
  padding: 1.0625rem 7.5rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--navy);
  width: 3rem;
  height: 2rem;
  color: white;
  border-radius: 3px;
`;
