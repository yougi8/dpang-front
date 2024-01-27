import React, { useState } from "react";
import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DataTable from "../../../../components/common/AdminDataTable";
import { faqManageData } from "../../../../assets/data/admin/AdminFaqData";
import Button from "@mui/material/Button";
import { withStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";

const handleButtonClick = (buttonType, dataIndex) => {
  const row = faqManageData[dataIndex];
  console.log(row);

  if (buttonType === "button1") {
    // 버튼1 클릭시 수행할 작업을 여기에 추가합니다.
    console.log("버튼1 클릭");
  } else if (buttonType === "button2") {
    // 버튼2 클릭시 수행할 작업을 여기에 추가합니다.
    console.log("버튼2 클릭");
  }
};

const columns = [
  { name: "id", label: "번호", options: { sort: true } },
  { name: "category", label: "카테고리", options: { sort: true } },
  { name: "title", label: "제목", options: { sort: true } },
  { name: "writer", label: "작성자", options: { sort: true } },
];

const FaqListPage = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  /* 정렬 함수 */
  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log("ss:", category);
  };

  /* 선택된 행은 상세정보로 이동 */
  const handleRowClick = (row) => {
    // setSelectedRow(row); // 클릭된 행의 정보를 상태로 업데이트
    console.log("dddd", row);
    navigate(`${row[0]}`);
  };

  return (
    <Wrap>
      <Title className="cm-LBold30 col-Black"> 고객센터</Title>

      <Option>
        {/* 정렬 */}
        <FormControl sx={{ width: "18.125rem" }}>
          <TextField
            select
            value={category}
            onChange={handleCategory}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
              style: { visibility: "hidden" }, // 레이블을 숨깁니다.
            }}
            SelectProps={{
              displayEmpty: true,
              renderValue: (selectedValue) =>
                selectedValue ? selectedValue : "문의 유형을 선택해주세요", // 드롭다운 메뉴에서 선택한 항목
            }}
          >
            <MenuItem value="" disabled>
              문의 카테고리를 선택해주세요
            </MenuItem>
            <MenuItem value="자주 찾는 FAQ">자주 찾는 FAQ</MenuItem>
            <MenuItem value="배송">배송</MenuItem>
            <MenuItem value="취소/교환/환불">취소/교환/환불</MenuItem>
            <MenuItem value="기타">기타</MenuItem>
            <MenuItem value="결제">결제</MenuItem>
            <MenuItem value="회원">회원</MenuItem>
          </TextField>
        </FormControl>
        <Link className="Btn_M_Navy" to="enroll">
          추가하기
        </Link>
      </Option>

      <Title className="cm-SBold18 col-Navy"> FAQ관리</Title>

      <DataTable
        data={faqManageData}
        columns={columns}
        onRowClick={handleRowClick}
      />
      <button className="Btn_M_Navy">선택 삭제</button>
    </Wrap>
  );
};

export default FaqListPage;

const Wrap = styled.div`
  padding: 0 7.5rem 0 7.5rem;
  box-sizing: border-box;
`;
const Title = styled.div`
  display: flex;
  padding: 2.125rem 0rem 0.9375rem 0;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledButton = withStyles({
  // Material UI의 Button 컴포넌트를 스타일링
  root: {
    backgroundColor: "var(--navy)",
    color: "var(--white)",
    border: "none",
    "&:hover": {
      backgroundColor: "var(--navy)",
      border: "none",
    },
  },
})(Button);
const StyledButton2 = withStyles({
  // Material UI의 Button 컴포넌트를 스타일링
  root: {
    backgroundColor: "var(--white)",
    border: "1px solid var(--navy)",
    color: "var(--black)",
    "&:hover": {
      backgroundColor: "var(--white)",
      border: "1px solid var(--navy)",
    },
  },
})(Button);
