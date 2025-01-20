import React, { useState } from "react";
import {
    Wrapper,
    SidebarItem,
    Sidebar,
    Content,
    Logo,
    Container,
    MainWrapper,
    MainContainer,
    MainTop,
    Weather,
    PostBtn,
    MainBottom,
    Stocks,
    Stock,
    Graphs,
    TopBar,
    AlarmBtn,
    Myname,
    LogoutBtn,
    StocklistContainer,
    StockListTitle,
    StockTopWrapper
} from './mainstyle';
import LogoImg from '../../images/img.png'
import { Reset } from 'styled-reset';
import Alarm from '../../images/alarm.png'
const MainPage = () => {
    const [activeMenu, setActiveMenu] = useState("메인화면");

    const renderContent = () => {
        switch (activeMenu) {
            case "메인화면":
                return(
                    <>
                        <Reset/>
                        <MainWrapper>
                            <TopBar>
                                <Myname>사용자 님</Myname>
                                <LogoutBtn>로그아웃</LogoutBtn>
                                <AlarmBtn src={Alarm}></AlarmBtn>
                            </TopBar>
                            <MainContainer>
                                <MainTop>
                                    <Weather></Weather>
                                    <PostBtn></PostBtn>
                                </MainTop>
                                <MainBottom>
                                    <Stocks>
                                        <Stock></Stock>
                                        <Stock></Stock>
                                        <Stock></Stock>
                                    </Stocks>
                                    <Graphs></Graphs>
                                </MainBottom>
                            </MainContainer>
                        </MainWrapper>
                    </>

                ) ;
            case "재료 목록 관리":
                return(
                    <>
                        <Reset/>
                        <MainWrapper>
                            <TopBar>
                                <Myname>사용자 님</Myname>
                                <LogoutBtn>로그아웃</LogoutBtn>
                                <AlarmBtn src={Alarm}></AlarmBtn>
                            </TopBar>
                            <StocklistContainer>
                                <StockTopWrapper>
                                    <StockListTitle>재료 목록 관리</StockListTitle>

                                </StockTopWrapper>
                            </StocklistContainer>
                        </MainWrapper>
                    </>

                ) ;
            case "재고 관리":
                return <h1>재고 관리 화면</h1>;
            case "메뉴 등록":
                return <h1>메뉴 등록 화면</h1>;
            case "주문":
                return <h1>주문 화면</h1>;
            case "보고서":
                return <h1>보고서 화면</h1>;
            default:
                return <h1>메인화면</h1>;
        }
    };

    return (
        <>
            <Reset/>
            <Wrapper>
                <Container>
                    <Logo src={LogoImg} alt="Logo" onClick={() => setActiveMenu("메인화면")} />
                    <Sidebar>
                        {[
                            "재료 목록 관리",
                            "재고 관리",
                            "메뉴 등록",
                            "주문",
                            "보고서",
                        ].map((item) => (
                            <SidebarItem
                                key={item}
                                active={item === activeMenu}
                                onClick={() => setActiveMenu(item)}
                            >
                                {item}
                            </SidebarItem>
                        ))}
                    </Sidebar>
                </Container>
                <Content>{renderContent()}</Content>
            </Wrapper>
        </>

    );
};

export default MainPage;
