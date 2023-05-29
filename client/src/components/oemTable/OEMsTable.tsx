import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "../../styles/OemsTable.module.css";
import { OEMsSpecProps } from "../../constant/constant";
import { Dispatch } from "redux";
import { setSelectedOem } from "../../redux/oems/oems.action";

const OEMsTable = () => {
  const { loading, data, selectedOem } = useSelector(
    (store: RootState) => store.oem
  );
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <>
      {loading ? (

      ): (
          <div className = {styles["OEM-specs"]}>
      <table>
        <caption>OEM Specifications</caption>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>List-Price</th>
            <th>Colors</th>
            <th>Mileage</th>
            <th>Power (in BHP)</th>
            <th>Max-speed</th>
            <th>Choose</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((el: OEMsSpecProps, indx: number) => (
            <tr key={el._id}>
              <td>{indx + 1}</td>
              <td>{el?.brand}</td>
              <td>{el?.model}</td>
              <td>{el?.year}</td>
              <td>{el?.listPrice}</td>
              <td>
                {el?.colors?.map((ele, i) => {
                  return (
                    <span
                      key={i}
                      style={{
                        height: "20px",
                        width: "20px",
                        border: "1px solid gray",
                        borderRadius: "50% ",
                        backgroundColor: ele.toLowerCase(),
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                  );
                })}
              </td>
              <td>{el?.mileage}</td>
              <td>{el?.power}</td>
              <td>{el?.maxSpeed}</td>
              <td>
                <button
                  style={{
                    backgroundColor: `${el._id === selectedOem ? "green" : "royalblue"
                      }`,
                    color: `${el._id === selectedOem ? "#fff" : "#fff"}`,
                  }}
                  onClick={() => {
                    if (el._id) dispatch(setSelectedOem(el._id));
                  }}
                >
                  Select OEM
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
      )}
    </>
  );
};

export default OEMsTable;
