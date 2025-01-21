import React, { useState } from "react";
import {
    Wrapper, SidebarItem, Sidebar,
    Content,
    Logo, Container, MainWrapper, MainContainer, MainTop,
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
    StockTopWrapper,
    CSVbtn,
    Search,
    StockManageTopWrapper,
    StockManageListTitle,
    StockManageBottpmWrapper,
    Situation,
    CMenu, MenuWrapper, Coffee, NonCoffee, Ctitle, SaveBtn, Table, TableRow, TableHeader, TableCell, Graph
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
                                    <div>
                                        <CSVbtn>csv 파일 업로드</CSVbtn>
                                        <Search>검색하기</Search>
                                    </div>
                                </StockTopWrapper>
                            </StocklistContainer>
                        </MainWrapper>
                    </>

                ) ;
            case "재고 관리":
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
                                <StockManageTopWrapper>
                                    <StockManageListTitle>현재 재고 상황</StockManageListTitle>
                                    <StockManageListTitle>예상 재고 상황</StockManageListTitle>
                                </StockManageTopWrapper>
                                <StockManageBottpmWrapper>
                                    <Situation></Situation>
                                    <Situation></Situation>
                                </StockManageBottpmWrapper>
                                <div>
                                    <label>
                                        <input type="checkbox" />
                                        재고 부족 알림
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        신규 입고 알림
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        품절 알림
                                    </label>
                                </div>
                            </StocklistContainer>
                        </MainWrapper>
                    </>
                ) ;
            case "메뉴 등록":
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
                                <StockManageTopWrapper>
                                    <StockManageListTitle>메뉴 등록</StockManageListTitle>
                                </StockManageTopWrapper>
                                <MenuWrapper>
                                    <Coffee>
                                        <Ctitle>Coffee</Ctitle>
                                        <div style={{'display':'flex', width:'96%', justifyContent:'space-between', marginTop:'10px'}}>
                                            <CMenu></CMenu>
                                            <CMenu></CMenu>
                                        </div>
                                        <div style={{'display':'flex', width:'96%', justifyContent:'space-between', marginTop:'10px'}}>
                                            <CMenu></CMenu>
                                            <CMenu></CMenu>
                                        </div>
                                        <div style={{'display':'flex', width:'96%', justifyContent:'space-between', marginTop:'10px'}}>
                                            <CMenu></CMenu>
                                            <CMenu></CMenu>
                                        </div>

                                    </Coffee>
                                    <NonCoffee>
                                        <Ctitle>Non-Coffee</Ctitle>
                                        <div style={{'display':'flex', width:'96%', justifyContent:'space-between', marginTop:'10px'}}>
                                            <CMenu></CMenu>
                                            <CMenu></CMenu>
                                        </div>
                                        <div style={{'display':'flex', width:'96%', justifyContent:'space-between', marginTop:'10px'}}>
                                            <CMenu></CMenu>
                                            <CMenu></CMenu>
                                        </div>
                                        <div style={{'display':'flex', width:'96%', justifyContent:'space-between', marginTop:'10px'}}>
                                            <CMenu></CMenu>
                                            <CMenu></CMenu>
                                        </div>
                                    </NonCoffee>
                                </MenuWrapper>
                                <SaveBtn>저장</SaveBtn>
                            </StocklistContainer>
                        </MainWrapper>
                    </>
                ) ;
            case "주문":
                return (
                    <>
                        <Reset />
                        <MainWrapper>
                            <TopBar>
                                <Myname>사용자 님</Myname>
                                <LogoutBtn>로그아웃</LogoutBtn>
                                <AlarmBtn src={Alarm}></AlarmBtn>
                            </TopBar>
                            <StocklistContainer>
                                <StockManageTopWrapper>
                                    <StockManageListTitle>주문 내역</StockManageListTitle>
                                </StockManageTopWrapper>
                                <Table>
                                    <thead>
                                    <TableRow>
                                        <TableHeader>상품명</TableHeader>
                                        <TableHeader>수량</TableHeader>
                                        <TableHeader>가격</TableHeader>
                                        <TableHeader>배송 정보</TableHeader>
                                    </TableRow>
                                    </thead>
                                    <tbody>
                                    <TableRow>
                                        <TableCell>우유</TableCell>
                                        <TableCell>10개</TableCell>
                                        <TableCell>20,000원</TableCell>
                                        <TableCell>익일 배송</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>커피 원두</TableCell>
                                        <TableCell>5kg</TableCell>
                                        <TableCell>50,000원</TableCell>
                                        <TableCell>3일 내 배송</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>시럽</TableCell>
                                        <TableCell>3병</TableCell>
                                        <TableCell>15,000원</TableCell>
                                        <TableCell>익일 배송</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>종이컵</TableCell>
                                        <TableCell>200개</TableCell>
                                        <TableCell>10,000원</TableCell>
                                        <TableCell>익일 배송</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>냅킨</TableCell>
                                        <TableCell>500개</TableCell>
                                        <TableCell>8,000원</TableCell>
                                        <TableCell>3일 내 배송</TableCell>
                                    </TableRow>
                                    </tbody>
                                </Table>
                            </StocklistContainer>
                        </MainWrapper>
                    </>
                );
            case "보고서":
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
                                <StockManageTopWrapper>
                                    <StockManageListTitle>보고서</StockManageListTitle>
                                </StockManageTopWrapper>
                                <Graph></Graph>
                                <Graph></Graph>
                                <SaveBtn>저장</SaveBtn>
                            </StocklistContainer>
                        </MainWrapper>
                    </>);
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
