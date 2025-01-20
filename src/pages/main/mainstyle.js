import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

export const Sidebar = styled.div`
  width: 250px;
  height: 88%;
  background-color: #562E00;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 200px;
  object-fit: contain;
  height: 12%;
`;

export const SidebarItem = styled.div`
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#ffffff" : "transparent")};
  color: ${(props) => (props.active ? "#000000" : "white")};
  &:hover {
    background-color: #ffffff;
    color: black;
  }
`;

export const Content = styled.div`
  flex: 1;
  background-color: #ecf0f1;
`;

export const Container = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const MainWrapper=styled.div`
    background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export const TopBar=styled.div`
    display: flex;
  width: 100%;
  height:12%;
  align-items: center;
  justify-content: flex-end;
`
export const MainContainer=styled.div`
    display: flex;
  flex-direction: column;
  width: 100%;
  height: 88%;
  align-items: center;
  justify-content: center;
`
export const MainTop=styled.div`
  width: 100%;
  height: 40%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`
export const Weather=styled.div`
  width: 70%;
  background-color: #61dafb;
  height: 95%;
`
export const PostBtn=styled.div`
  width: 25%;
  background-color: blue;
  height: 95%;
`
export const MainBottom=styled.div`
  width: 100%;
  height: 60%;
  align-items: center;
  display: flex;
  justify-content: space-evenly;`
export const Stocks=styled.div`
  width: 25%;
  background-color: blue;
  height: 95%;
`
export const Stock=styled.div``
export const Graphs=styled.div`
  width: 70%;
  background-color: #61dafb;
  height: 95%;
`
export const Myname=styled.div`
  width: 150px;
  background-color: white;
  margin-right: 15px;

`
export const LogoutBtn=styled.button`
  width: 150px;
  margin-right: 15px;

`
export const AlarmBtn=styled.img`
  width: 32px;
  margin-right: 15px;
  height: auto;
`

export const StocklistContainer=styled.div`
    display: flex;
  flex-direction: column;
  width: 100%;
  height: 88%;
  align-items: center;
`
export const StockTopWrapper=styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`
export const StockListTitle=styled.div`
    font-size: 40px;
  font-weight: bold;
`
export const CSVbtn=styled.button`
    margin-right: 20px;

`
export const Search=styled.button`

`

export const StockManageTopWrapper=styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 20px;
`
export const StockManageListTitle=styled.div`
    font-size: 25px;
  font-weight: bold;
`

export const StockManageBottpmWrapper=styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  margin-top: 20px;
`
export const Situation=styled.div`
  display: flex;
  width: 300px;
  height: 450px;
  background-color: gray;
  justify-content: space-evenly;
  margin-top: 20px;
`