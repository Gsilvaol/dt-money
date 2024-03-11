import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHiglight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHiglight variant="income">
                                    R$ 12.000,00
                                </PriceHiglight>
                            </td>
                            <td>Venda</td>
                            <td>11/03/2024</td>

                        </tr>

                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHiglight variant="outcome">
                                    -R$ 59,00
                                </PriceHiglight>
                            </td>
                            <td>Venda</td>
                            <td>11/03/2024</td>

                        </tr>

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        
        </div >
    )
}