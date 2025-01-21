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
    StockTopWrapper,
    CSVbtn,
    Search,
    StockManageTopWrapper,
    StockManageListTitle,
    StockManageBottpmWrapper,
    Situation,
    CMenu,
    MenuWrapper,
    Coffee,
    NonCoffee,
    Ctitle,
    SaveBtn,
    Table,
    TableRow,
    TableHeader,
    TableCell,
    TableButton,
    Graph,
    Graph2
} from './mainstyle';
import LogoImg from '../../images/img.png'
import { Reset } from 'styled-reset';
import Alarm from '../../images/alarm.png'
import Weatherimg from '../../images/img_3.png'
import Graphimg from '../../images/img_6.png'
import Pos from '../../images/img_5.png'
import Stock1 from '../../images/img_7.png'
import Stock2 from '../../images/img_8.png'
import Stock3 from '../../images/img_9.png'
import sit1 from '../../images/img_10.png'
import sit2 from '../../images/img_11.png'
import Reportp from '../../images/img_12.png'

const MainPage = () => {
    const [activeMenu, setActiveMenu] = useState("메인화면");
    const [showTable, setShowTable] = useState(false); // 테이블 표시 상태
    const [showPopup, setShowPopup] = useState(false); // 팝업 상태
    const [selectedMenu, setSelectedMenu] = useState(null); // 선택한 메뉴 정보

    const menuData = {
        coffee: [
            { name: "아메리카노", ingredients: { 물: "200ml", 원두: "10g" }, price: 4000 },
            { name: "카페라떼", ingredients: { 원두: "10g", 우유: "200ml" }, price: 4500 },
            { name: "카푸치노", ingredients: { 원두: "10g", 우유: "150ml", 거품: "50ml" }, price: 4800 },
            { name: "모카", ingredients: { 원두: "10g", 우유: "200ml", 초콜릿: "30g" }, price: 5000 },
            { name: "콜드브루", ingredients: { 콜드브루: "150ml", 얼음: "100g" }, price: 5500 },
            { name: "에스프레소", ingredients: { 원두: "10g" }, price: 3000 },
        ],
        nonCoffee: [
            { name: "녹차라떼", ingredients: { 녹차가루: "10g", 우유: "200ml" }, price: 4800 },
            { name: "초코라떼", ingredients: { 초콜릿: "30g", 우유: "200ml" }, price: 5000 },
            { name: "레몬에이드", ingredients: { 레몬즙: "30ml", 물: "200ml", 설탕: "10g" }, price: 4500 },
            { name: "밀크티", ingredients: { 홍차: "50ml", 우유: "200ml" }, price: 4800 },
            { name: "오렌지 주스", ingredients: { 오렌지즙: "200ml" }, price: 4000 },
            { name: "딸기 스무디", ingredients: { 딸기: "50g", 요거트: "150ml", 얼음: "100g" }, price: 5200 },
        ],
    };
    const navigateToCoupang = () => {
        window.location.href = "https://www.coupang.com/np/search?component=&q=%EC%9A%B0%EC%9C%A0&channel=user";
    };

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedMenu(null);
        setSelectedQuantity(1);
    };

    const stockData = [
        { stock_id: 1, stock_name: "메이플 시럽", stock_total: 123, stock_quantity: 13, stock_price: 15000, mall_id: 4 },
        { stock_id: 2, stock_name: "바닐라 빈 파우더", stock_total: 119, stock_quantity: 95, stock_price: 20000, mall_id: 2 },
        { stock_id: 3, stock_name: "디카페인 에스프레소 원두", stock_total: 431, stock_quantity: 18, stock_price: 25000, mall_id: 1 },
        { stock_id: 4, stock_name: "설탕", stock_total: 297, stock_quantity: 75, stock_price: 5000, mall_id: 1 },
        { stock_id: 5, stock_name: "민트 시럽", stock_total: 213, stock_quantity: 97, stock_price: 12000, mall_id: 5 },
        { stock_id: 6, stock_name: "우유", stock_total: 500, stock_quantity: 230, stock_price: 2500, mall_id: 3 },
        { stock_id: 7, stock_name: "초콜릿 소스", stock_total: 150, stock_quantity: 50, stock_price: 18000, mall_id: 4 },
        { stock_id: 8, stock_name: "녹차 파우더", stock_total: 200, stock_quantity: 120, stock_price: 22000, mall_id: 2 },
    ];


    const handleButtonClick = () => {
        setShowTable(true); // 버튼 클릭 시 테이블 표시
    };


    const [remainingBeans, setRemainingBeans] = React.useState(2000);
    const [selectedQuantity, setSelectedQuantity] = React.useState(1);

    const handleIncrease = () => {
        setSelectedQuantity((prev) => prev + 1);
        if (selectedMenu.ingredients["원두"]) {
            const beanUsage = parseInt(selectedMenu.ingredients["원두"]);
            setRemainingBeans((prev) => prev - beanUsage);
        }
    };

    const handleDecrease = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity((prev) => prev - 1);
            if (selectedMenu.ingredients["원두"]) {
                const beanUsage = parseInt(selectedMenu.ingredients["원두"]);
                setRemainingBeans((prev) => prev + beanUsage);
            }
        }
    };

    const renderContent = () => {

        switch (activeMenu) {
            case "메인화면":
                return (
                    <>
                        <Reset />
                        <MainWrapper>
                            <TopBar>
                                <Myname>사용자 님</Myname>
                                <LogoutBtn>로그아웃</LogoutBtn>
                                <AlarmBtn src={Alarm}></AlarmBtn>
                            </TopBar>
                            <MainContainer>
                                <MainTop>
                                    <Weather src={Weatherimg}></Weather>
                                    <PostBtn src={Pos}></PostBtn>
                                </MainTop>
                                <MainBottom>
                                    <Stocks>
                                        <Stock src={Stock1}></Stock>
                                        <Stock src={Stock2}></Stock>
                                        <Stock src={Stock3}></Stock>
                                    </Stocks>
                                    <Graphs src={Graphimg}></Graphs>
                                </MainBottom>
                            </MainContainer>
                        </MainWrapper>
                    </>
                );
            case "재료 목록 관리":
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
                                <StockTopWrapper>
                                    <StockListTitle>재료 목록 관리</StockListTitle>
                                    <div style={{display:'flex'}}>
                                        <CSVbtn onClick={handleButtonClick}>csv 파일 업로드</CSVbtn>
                                        <Search>검색하기</Search>
                                    </div>
                                </StockTopWrapper>
                                {showTable && (
                                    <Table>
                                        <thead>
                                        <TableRow>
                                            <TableHeader>ID</TableHeader>
                                            <TableHeader>재료 이름</TableHeader>
                                            <TableHeader>총 수량</TableHeader>
                                            <TableHeader>현재 수량</TableHeader>
                                            <TableHeader>가격</TableHeader>
                                            <TableHeader>상점 ID</TableHeader>
                                        </TableRow>
                                        </thead>
                                        <tbody>
                                        {stockData.map((item) => (
                                            <TableRow key={item.stock_id}>
                                                <TableCell>{item.stock_id}</TableCell>
                                                <TableCell>{item.stock_name}</TableCell>
                                                <TableCell>{item.stock_total}</TableCell>
                                                <TableCell>{item.stock_quantity}</TableCell>
                                                <TableCell>{item.stock_price}원</TableCell>
                                                <TableCell>{item.mall_id}</TableCell>
                                            </TableRow>
                                        ))}
                                        </tbody>
                                    </Table>
                                )}
                            </StocklistContainer>
                        </MainWrapper>
                    </>
                );
            case "재고 관리":
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
                                    <StockManageListTitle>현재 재고 상황</StockManageListTitle>
                                    <StockManageListTitle>예상 재고 상황</StockManageListTitle>
                                </StockManageTopWrapper>
                                <StockManageBottpmWrapper>
                                    <Situation src={sit1}></Situation>
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_75_430)">
                                            <path d="M31.2498 10.4167L28.3123 13.3542L37.854 22.9167H4.1665V27.0833H37.854L28.2915 36.6458L31.2498 39.5833L45.8332 25L31.2498 10.4167Z" fill="#562E00"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_75_430">
                                                <rect width="50" height="50" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <Situation src={sit2}></Situation>
                                </StockManageBottpmWrapper>
                                <div style={{fontSize:'20px', fontWeight:'bold', marginTop:'20px'}}>알림 서비스</div>
                                <div style={{fontSize:'16px', fontWeight:'bold', marginTop:'10px'}}>
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
                );
            case "메뉴 등록":
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
                                    <StockManageListTitle>메뉴 등록</StockManageListTitle>
                                </StockManageTopWrapper>
                                <MenuWrapper>
                                    <Coffee>
                                        <Ctitle>Coffee</Ctitle>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
                                            {menuData.coffee.map((menu, index) => (
                                                <CMenu key={index} onClick={() => handleMenuClick(menu)}>
                                                    <div style={{ textAlign: "center", paddingTop: "60px", fontSize: "16px" }}>{menu.name}</div>
                                                </CMenu>
                                            ))}
                                        </div>
                                    </Coffee>
                                    <NonCoffee>
                                        <Ctitle>Non-Coffee</Ctitle>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginTop: "10px" }}>
                                            {menuData.nonCoffee.map((menu, index) => (
                                                <CMenu key={index} onClick={() => handleMenuClick(menu)}>
                                                    <div style={{ textAlign: "center", paddingTop: "60px", fontSize: "16px" }}>{menu.name}</div>
                                                </CMenu>
                                            ))}
                                        </div>
                                    </NonCoffee>
                                </MenuWrapper>
                                <SaveBtn>저장</SaveBtn>
                            </StocklistContainer>
                        </MainWrapper>
                        {showPopup && selectedMenu && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: "0",
                                    left: "0",
                                    width: "100vw",
                                    height: "100vh",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 1000,
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#fff",
                                        padding: "20px",
                                        borderRadius: "10px",
                                        width: "300px",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        textAlign: "center",
                                    }}
                                >
                                    <div style={{fontSize:'20px', fontWeight:'bold', width:'100%', textAlign:'left'}}>{selectedMenu.name}</div>
                                    <p style={{width:'100%', textAlign:'left', marginTop:'20px'}}><strong>가격:</strong> {selectedMenu.price * selectedQuantity}원</p>
                                    <p style={{width:'100%', textAlign:'left', marginTop:'10px'}}><strong>재료</strong></p>
                                    <ul style={{ listStyleType: "none", padding: "0", width:'100%',marginTop:'5px',textAlign:'left' }}>
                                        {Object.entries(selectedMenu.ingredients).map(([ingredient, amount], index) => (
                                            <li key={index}>
                                                - {ingredient}: {amount} × {selectedQuantity}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px", alignItems:'center' }}>
                                        <button
                                            onClick={handleDecrease}
                                            style={{
                                                padding: "5px 10px",
                                                backgroundColor: "#ccc",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            -
                                        </button>
                                        <span style={{ fontSize: "16px", fontWeight: "bold" }}>{selectedQuantity}</span>
                                        <button
                                            onClick={handleIncrease}
                                            style={{
                                                padding: "5px 10px",
                                                backgroundColor: "#562E00",
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p style={{width:'100%', textAlign:'left', marginTop:'20px', fontSize:'18px', fontWeight:'bold'}}><strong>남은 원두:</strong> {remainingBeans}g</p>
                                    <button
                                        onClick={closePopup}
                                        style={{
                                            marginTop: "20px",
                                            padding: "10px 20px",
                                            backgroundColor: "#562E00",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        닫기
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                );
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
                                    <StockManageListTitle>주문</StockManageListTitle>
                                </StockManageTopWrapper>
                                <Table>
                                    <thead>
                                    <TableRow>
                                        <TableHeader>상품명</TableHeader>
                                        <TableHeader>수량</TableHeader>
                                        <TableHeader>가격</TableHeader>
                                        <TableHeader>배송 정보</TableHeader>
                                        <TableHeader>주문하기</TableHeader>
                                    </TableRow>
                                    </thead>
                                    <tbody>
                                    <TableRow>
                                        <TableCell>우유</TableCell>
                                        <TableCell>10개</TableCell>
                                        <TableCell>20,000원</TableCell>
                                        <TableCell>익일 배송</TableCell>
                                        <TableCell><TableButton onClick={navigateToCoupang}>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>커피 원두</TableCell>
                                        <TableCell>5kg</TableCell>
                                        <TableCell>50,000원</TableCell>
                                        <TableCell>3일 내 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>설탕</TableCell>
                                        <TableCell>2kg</TableCell>
                                        <TableCell>10,000원</TableCell>
                                        <TableCell>2일 내 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>시럽</TableCell>
                                        <TableCell>3병</TableCell>
                                        <TableCell>15,000원</TableCell>
                                        <TableCell>익일 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>초콜릿 소스</TableCell>
                                        <TableCell>2병</TableCell>
                                        <TableCell>12,000원</TableCell>
                                        <TableCell>2일 내 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>티백</TableCell>
                                        <TableCell>50개</TableCell>
                                        <TableCell>25,000원</TableCell>
                                        <TableCell>익일 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>에스프레소 머신 필터</TableCell>
                                        <TableCell>1개</TableCell>
                                        <TableCell>30,000원</TableCell>
                                        <TableCell>1주 내 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>빵</TableCell>
                                        <TableCell>10개</TableCell>
                                        <TableCell>15,000원</TableCell>
                                        <TableCell>3일 내 배송</TableCell>
                                        <TableCell><TableButton>주문하기</TableButton></TableCell>
                                    </TableRow>
                                    </tbody>
                                </Table>
                            </StocklistContainer>
                        </MainWrapper>
                    </>
                );
            case "보고서":
                return (
                    <>
                        <Reset />
                        <MainWrapper>
                            <TopBar>
                                <Myname>사용자 님</Myname>
                                <LogoutBtn>로그아웃</LogoutBtn>
                                <AlarmBtn src={Alarm}></AlarmBtn>
                            </TopBar>
                            <Graph2 src={Reportp}></Graph2>

                        </MainWrapper>
                    </>
                );
            default:
                return <h1>메인화면</h1>;
        }
    };

    return (
        <>
            <Reset />
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
