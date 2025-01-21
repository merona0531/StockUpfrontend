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
  background-color: white;
  margin-right: 30px;
  font-size: 20px;

`
export const LogoutBtn=styled.button`
  width: 150px;
  margin-right: 40px;
  font-size: 20px;
  height: 42px;
  cursor: pointer;
  border: none;


`
export const AlarmBtn=styled.img`
  width: 32px;
  margin-right: 25px;
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
  background-color: #DABA8F;
  width: 150px;
  height: 42px;
  cursor: pointer;
  border: none;

`
export const Search=styled.button`
  width: 150px;
  height: 42px;
  background-color: #DABA8F;
  cursor: pointer;
  border: none;

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
export const MenuWrapper=styled.div`
  width: 80%;
  height: 550px;
  display: flex;
`
export const Coffee=styled.div`
    width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
    
`
export const NonCoffee=styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Ctitle=styled.div`
    font-size: 25px;
  width: 96%;
  background-color: #d9d9d9;
  text-align: center;
`
export const CMenu=styled.div`
  width: 240px;
  height: 150px;
  background-color: #d9d9d9;
`
export const SaveBtn = styled.button`
  
`
export const Graph = styled.div`
  width: 600px;
  height: 200px;
  background-color: #d9d9d9;
  margin-bottom: 15px;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const TableHeader = styled.th`
    background-color: #562E00;
    color: white;
    text-align: left;
    padding: 12px;
`;

export const TableCell = styled.td`
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;

    &:last-child {
        text-align: center;
    }
`;

export const TableButton = styled.button`
    background-color: #562E00; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #562E00;
    }

    &:active {
        background-color: #562E00;
    }

    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;
