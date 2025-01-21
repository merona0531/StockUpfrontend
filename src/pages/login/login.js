import {
    Wrapper, Logo, LogInWrapper, RightImg, LogInInput,
    LogInButton, SignInButton, FindButton,
    LogInUnderWrapper, ImgWrapper, LogoWrapper, MiddleWrapper
} from './loginstyle';
import React from "react";
import { useNavigate } from 'react-router-dom';  // useNavigate import 추가
import Image from '../../images/img_1.png';
import LogoImage from '../../images/img.png';

export default function LoginPage() {
    const navigate = useNavigate();  // navigate 초기화

    const handleLogin = () => {
        // 로그인 성공 처리 후 /로 이동
        navigate('/');
    };

    return (
        <>
            <Wrapper>
                <LogoWrapper>
                    <Logo src={LogoImage}></Logo>
                </LogoWrapper>
                <MiddleWrapper>
                    <LogInWrapper>
                        <LogInInput type="text" maxLength="20" size="44" placeholder="아이디" />
                        <LogInInput type="password" maxLength="20" size="44" placeholder="비밀번호" />
                        <LogInButton type="button" onClick={handleLogin}>로그인</LogInButton>
                        <LogInUnderWrapper>
                            <SignInButton>회원가입</SignInButton>
                            <FindButton>아이디·비밀번호 찾기</FindButton>
                        </LogInUnderWrapper>
                    </LogInWrapper>
                    <ImgWrapper><RightImg src={Image}></RightImg></ImgWrapper>
                </MiddleWrapper>
            </Wrapper>
        </>
    );
}
