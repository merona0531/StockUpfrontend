import {
    Wrapper, Logo, LogInWrapper, LogInInput,
    LogInButton, LogoWrapper, MiddleWrapper
} from './signinstyle';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../images/img.png';

export default function SigninPage() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9]/g, ""); // 숫자만 허용
        setPhoneNumber(numericValue);
    };

    const handleLogoClick = () => {
        navigate('/');
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        // 회원가입 처리 로직 추가
        alert("회원가입 성공!");
        navigate('/login');
    };

    return (
        <>
            <Wrapper>
                <LogoWrapper>
                    <Logo src={LogoImage} onClick={handleLogoClick}></Logo>
                </LogoWrapper>
                <MiddleWrapper>
                    <LogInWrapper>
                        <LogInInput type="text" maxLength="20" size="44" placeholder="이름" />
                        <LogInInput
                            type="text"
                            maxLength="20"
                            size="44"
                            placeholder="전화번호"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                        <LogInInput type="text" maxLength="20" size="44" placeholder="아이디" />
                        <LogInInput
                            type="password"
                            maxLength="20"
                            size="44"
                            placeholder="비밀번호"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <LogInInput
                            type="password"
                            maxLength="20"
                            size="44"
                            placeholder="비밀번호 확인"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        <LogInButton type="button" onClick={handleSubmit}>회원가입</LogInButton>
                    </LogInWrapper>
                </MiddleWrapper>
            </Wrapper>
        </>
    );
}
