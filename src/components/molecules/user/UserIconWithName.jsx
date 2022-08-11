import React, { useContext } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = (props) => {
  console.log("UserIconWithName");

  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg src={image} alt="プロフィール" height={160} width={160} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
