import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import "./Widget.scss";

const Widget = ({ type },props) => {
  let data;
  let amount = 1000;
  switch (type) {
    case "condenuncia":
       amount = 5;
       console.log(props.cantidad)
        break;
    case "sindenuncua":
        amount = 5;
        break;
        case "enproceso":
              amount = 0;
            break;
    default:
       amount = 0;
        break;
}
//  const amount = 1000;
  const difference = 20;

  switch (type) {
    case "familias":
      data = {
        title: "Familias",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)"
            }}
          />
        )
      };
      break;
    case "condenuncia":
      data = {
        title: "Con Denuncia",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(218, 165, 32, 0.2)"
            }}
          />
        )
      };
      break;
    case "sindenuncua":
      data = {
        title: "Sin Denuncia",
        isMoney: false,
        link: "View net earnings",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)"
            }}
          />
        )
      };
      break;
    case "enproceso":
      data = {
        title: "En Proceso",
        isMoney: false,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(128, 0, 128, 0.2)"
            }}
          />
        )
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {difference}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;