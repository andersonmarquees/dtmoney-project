import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income" />
        </header>
        <strong>$1000</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="outcomeImg" />
        </header>
        <strong>-$300</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>$700</strong>
      </div>
    </Container>
  );
}
