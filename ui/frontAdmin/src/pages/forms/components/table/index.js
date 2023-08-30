import React, { useState } from "react";
import { Button, Input, Table } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import useData from "../../Hook/useData";

export default function Tables() {
  const [chekedItem, setCheckedItems] = useState([]);
  const { type } = useParams();
  const { data, Search, value, setValue } = useData();
  const navigate = useNavigate();

  function addItem(val) {
    const item = chekedItem?.filter((a) => a != val);
    chekedItem?.includes(val)
      ? setCheckedItems([...item])
      : setCheckedItems([...chekedItem, val]);
  }

  function NextPage() {
    const data = chekedItem?.join(",");
    navigate("/pdf/stirs=" + data);
  }
  return (
    <div>
      <div className="title">
        <h2>
          Ma'lumot {type !== "active" ? "to'ldirmagan" : "to'ldirgan"}{" "}
          foydalanuvchilar ro'yxati
        </h2>
        <div className="d-flex">
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Qidiruv"
            value={value}
            onChange={(a) => setValue(a.target.value)}
          />
          <button onClick={() => Search()} className="btn btn-success ms-2">
            Qidiruv
          </button>
        </div>
        {chekedItem?.length > 0 ? (
          <Button onClick={() => NextPage()}>Hammasini ko'rish</Button>
        ) : (
          <Link to={type !== "active" ? "/table/active" : "/table/deactive"}>
            {type === "active" ? "To'ldirilmaganlarini" : "To'ldirilganlarini"}{" "}
            ko'rish
          </Link>
        )}
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>Check</th>
            <th>T/R</th>
            <th>Rasmiy nomi</th>
            <th>Stir</th>
            <th>Faoliyat turi</th>
            <th>Tashkilot rahbari</th>
            <th>Joylashgan manzili</th>
            <th>Ammallar</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr key={item.stir}>
              <th>
                <Input
                  checked={chekedItem?.includes(item?.stir)}
                  type="checkbox"
                  value={item?.stir}
                  onChange={(e) => addItem(e.target.value)}
                />
              </th>
              <th scope="row">{i + 1}</th>
              <td>{item.rasmiy_nomi}</td>
              <td>{item.stir}</td>
              <td>{item.faoliyat_turi}</td>
              <td>{item.tashkilot_raxbari_ismi}</td>
              <td>{item.yuridik_manzili}</td>
              <td>
                <Link to={"/detail/" + item.stir} className="seeLink">
                  Ko'rish
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
