import React from "react";
import styled, { keyframes } from "styled-components";
import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/me.jpg";
import Loader from "../../Loader";
import device from "../../Device";

const fadeIn = keyframes`
  from{
    opacity:0;
  }
  to {
    opacity:1;
  }
  `;

const Container = styled.div`
  background-image: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${fadeIn} 0.5s ease-in-out;
  max-height: 200%;

  @media ${device.mobileL} {
    max-height: 200%;
  }
`;

const Motto = styled.span`
  font-size: 30px;
  text-align: center;
  padding: 0px 50px 30px 50px;
  font-weight: 600;
  line-height: 40px;
  color: white;

  @media ${device.mobileL} {
    font-size: 20px;
    line-height: 25px;
    padding: 0;
    margin-bottom: 20px;
  }
`;

const SayHello = styled.span`
  font-size: 25px;
  text-align: center;
  font-weight: 500;

  @media ${device.mobileL} {
    font-size: 18px;
  }
`;

const Description = styled.span`
  font-size: 20px;
  line-height: 35px;

  @media ${device.mobileL} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const IntroducePresenter = ({ image, loading }) => (
  <Container image={loading ? null : image.src}>
    {loading ? <Loader /> : null}
    <ProfileDetail title="자기 소개" imageUrl={myPhoto}>
      <Motto>
        {" "}
        남들보다 잘난 것이 고귀한 것이 아니다. <br />
        어제의 나보다 발전한 나의 모습이 고귀한 것이다.
      </Motto>
      <SayHello>안녕하세요 강기석입니다.!!!</SayHello>
      <Description>
        <br />
        &nbsp; &nbsp;기존에 2년 정도 반도체 관련 기술 영업직으로 있었지만, 배울
        수 있는 환경이 넉넉하지 않아, 퇴사 후 산티아고 순례길을 완주하며 미래에
        대해 깊이 생각하다가 웹 개발자를 선택하게 되었습니다.
        <br /> &nbsp; &nbsp;웹 개발자를 선택한 이유는 빠르게 발전하는 인터넷
        세상속에서 배움을 접할 수 있는 곳이 무궁무진하기 때문이었습니다. 또한,
        막힌 문제를 풀어나갈 때 그 쾌감이 좋아서입니다. 좋아하는 일을 하면
        즐기게 되고, 그 결과 잘하게 된다고 생각합니다.
        <br /> &nbsp; &nbsp;저는 국비 지원 학원을 선택하는 대신 Nomad Academy와
        생활코딩 인터넷 강의, 구글 검색을 통하여 독학하였습니다. Nomad
        Academy에서는 여러 수강생과 함께 무사히 수료를 마쳤으며, Coding Test를
        통해 기본기를 익혔습니다.
        <br />
        &nbsp; &nbsp;현재 풀 스택 개발자를 지향하며, 좋아하는 일을 즐기면서
        잘하는, 그런 길을 함께 걷고 싶습니다. 많은 관심 부탁드립니다.
        감사합니다.
        <br />
        (궁금하신 점은 메일 부탁드릴게요!)
      </Description>
    </ProfileDetail>
  </Container>
);

export default IntroducePresenter;
