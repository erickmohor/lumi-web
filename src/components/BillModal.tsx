import { EnergyBillProps } from '@/app/(authenticated)/faturas/page'
import { Button } from './Button'
import { Header } from './Header'


type ModalProps = {
  data: EnergyBillProps | undefined,
  closeModal: () => void
}

export function BillModal({ data, closeModal }: ModalProps) {

  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col overflow-y-auto max-h-[80vh] w-3/4 p-5 m-5 bg-gray-650 border-2 border-gray-650 rounded-lg text-gray-300'>
      {
        data &&
        (
          <>
            <Header
              title='Detalhes da Fatura'
            />

            <div className='flex text-center gap-10 justify-between m-10'>

              <span>
                <span className='font-bold'>Número do Cliente: </span>
                {data.customer_number} <br />
              </span>

              <span>
                <span className='font-bold'>Número da instalação: </span>
                {data.installation_number} <br />
              </span>

              <span className='mb-6'>
                <span className='font-bold'>Número da Nota Fiscal: </span>
                {data.invoice_number} <br />
              </span>

            </div>

            <div className='flex flex-1 flex-col justify-center items-center'>
              <h2 className='text-center text-xl mb-6 text-gray-100'>
                Informações
              </h2>
              <div className='w-3/4 bg-gray-700 border-2 border-gray-700 rounded-md mb-6'>
                <table className='table-auto w-full text-center'>
                  <thead>
                    <tr>
                      <th className='p-3 w-1/4'>Mês de Referência</th>
                      <th className='p-3 w-1/4'>Vencimento</th>
                      <th className='p-3 w-1/4'>Total</th>
                      <th className='p-3 w-1/4'>Contrib. Ilum. Pública <br /> Municipal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-3'>{data.reference_month}</td>
                      <td>{data.due_date}</td>
                      <td>{data.invoice_total}</td>
                      <td>{data.contribution_public_lighting}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-center text-xl mb-6 mt-5 text-gray-100'>
                Energia Elétrica
              </h2>
              <div className='w-3/4 bg-gray-700 border-2 border-gray-700 rounded-md mb-6'>
                <table className='table-auto w-full text-center'>
                  <thead>
                    <tr>
                      <th className='p-3'>Quantidade (kWh)</th>
                      <th>Preço Unitário (R$)</th>
                      <th>Valor (R$)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-3'>{data.energy_amount}</td>
                      <td>{data.energy_price}</td>
                      <td>{data.total_energy_cost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-center text-xl mb-6 mt-5 text-gray-100'>
                Energia Injetada HFP
              </h2>
              <div className='w-3/4 bg-gray-700 border-2 border-gray-700 rounded-md mb-6'>
                <table className='table-auto w-full text-center'>
                  <thead>
                    <tr>
                      <th className='p-3'>Quantidade (kWh)</th>
                      <th>Preço Unitário (R$)</th>
                      <th>Valor (R$)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-3'>{data.injected_energy_amount}</td>
                      <td>{data.injected_energy_price}</td>
                      <td>{data.total_injected_energy_cost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className='text-center text-xl mb-6 mt-5 text-gray-100'>
                Energia Compensada s/ ICMS
              </h2>
              <div className='w-3/4 bg-gray-700 border-2 border-gray-700 rounded-md mb-6'>
                <table className='table-auto w-full text-center'>
                  <thead>
                    <tr>
                      <th className='p-3'>Quantidade (kWh)</th>
                      <th>Preço Unitário (R$)</th>
                      <th>Valor (R$)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-3'>{data.compensated_energy_amount}</td>
                      <td>{data.compensated_energy_price}</td>
                      <td>{data.total_compensated_energy_cost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )
      }

      <div className='flex justify-center'>
        <Button
          name='Fechar'
          onClick={() => closeModal()}
        />
      </div>
    </div>
  )
}