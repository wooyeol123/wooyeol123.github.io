import React from "react";
import styled, { keyframes } from "styled-components";

import ProfileDetail from "../../ProfileDetail";
import myPhoto from "../../../images/santiago.jpg";
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

const Question = styled.span`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 10px;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

const Answer = styled.span`
  font-size: 20px;
  margin-bottom: 30px;

  @media ${device.mobileL} {
    font-size: 15px;
  }
`;

const InterviewPresenter = ({ image, loading }) => (
  <Container image={loading ? null : image.src}>
    {loading ? <Loader /> : null}
    <ProfileDetail title="셀프 인터뷰" imageUrl={myPhoto}>
      <Question>1. 현재 새로운 기회를 찾고 있는 이유가 무엇인가요?</Question>

      <Answer>
        &nbsp; &nbsp; 인생의 행복은 자신이 하는 일에 따라 결정된다고 생각합니다.
        항상 발전하기를 좋아하는 저의 성향과 웹개발은 무척이나 잘맞는다고
        생각해서 새로운 도전을 하게되었고, 앞으로 나아가 동료들과 개발을
        이어나가며 발전된 나의 모습을 보며 즐거움을 얻는게 저의 목표입니다.
      </Answer>

      <Question>2. 일에 있어 가장 중요하게 생각하는 것이 있다면?</Question>
      <Answer>
        &nbsp; &nbsp;일에 있어 가장 중요한 덕목은 동료를 아끼는 마음이라고
        생각합니다. 서로 믿고 의지할 수 있는 동료들이 존재하고 서로의 발전에
        기여할 수 있다면 어떠한 문제도 해결해 나갈 수 있다고 저는 믿고 있습니다.
      </Answer>

      <Question>3. 당신만의 강점이 있다면?</Question>
      <Answer>
        &nbsp; &nbsp; 저의 강점은 의사소통 능력과 빠른 발전가능성입니다.
        기술영업직을 겪으며 동료, 고객과 대화하는 방법을 배웠습니다. 또한, 항상
        호기심이 많아 내가 좋아하는 분야에서 전문가가 되고 싶은게 저의 꿈입니다.
        웹개발을 공부한지 얼마 되지 않았지만 저는 저의 발전속도에 만족하고
        있습니다.
      </Answer>

      <Question>4. 앞으로 어떤 커리어를 꿈꾸시나요?</Question>
      <Answer>
        &nbsp; &nbsp; 저의 목표는 단순히 돈이 아닌 한 분야에서 전문가가
        되는것입니다. 주변에 훌륭한 개발자들과 함께 성장하여 좋은 리더로
        거듭나고 싶습니다.
      </Answer>
    </ProfileDetail>
  </Container>
);

export default InterviewPresenter;
