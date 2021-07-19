import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>website development</td>
            <td className="deposit">$12.000</td>
            <td>Development</td>
            <td>07/18/2021</td>
          </tr>
          <tr>
            <td>bills</td>
            <td className="withdraw">-$2.000</td>
            <td>Home</td>
            <td>07/20/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
