import { MenuList } from "../Helper/MenuList";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-list">
        {MenuList.map((item, key) => {
          return (
            <div className="menu-item">
              <div
                style={{
                  gap: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={item.image} />
                <h3>{item.name}</h3>
                <p>$ {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
