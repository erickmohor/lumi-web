'use client'
import { FormEvent, useEffect, useState } from 'react'
import { Upload } from 'lucide-react'

import { api } from '@/lib/api'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading'
import { BillModal } from '@/components/BillModal'


export interface EnergyBillProps {
  id: string,
  created_at: string,
  customer_number: string,
  installation_number: string,
  reference_month: string,
  invoice_number: string,
  invoice_total: string,
  due_date: string,
  energy_unit: string,
  energy_amount: string,
  energy_price: string,
  total_energy_cost: string,
  injected_energy_unit: string,
  injected_energy_amount: string,
  injected_energy_price: string,
  total_injected_energy_cost: string,
  compensated_energy_unit: string,
  compensated_energy_amount: string,
  compensated_energy_price: string,
  total_compensated_energy_cost: string,
  contribution_public_lighting: string,
  user_id: string,
}


export default function Faturas() {
  const [energyBills, setEnergyBills] = useState<EnergyBillProps[]>()
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState<EnergyBillProps>({} as EnergyBillProps)
  const [uploadBill, setUploadBill] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getEnergyBills() {
      setIsLoading(true)

      const { data } = await api.get('/energy-bill/all')

      if (data.energyBills) {
        setEnergyBills(data.energyBills)
      }


      setIsLoading(false)
    }

    getEnergyBills()
  }, [])

  function closeModal() {
    setShowModal(false)
  }

  async function handleUploadBill(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErrorMessage('')
    setSuccessMessage('')

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('file')

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      try {
        const uploadResponse = await api.post('/energy-bill/register', uploadFormData)

        if (uploadResponse.status === 201) {
          setSuccessMessage('Fatura registrada com sucesso!')
        }

      } catch (error: any) {
        console.log(error)

        if (error?.response?.data?.message == 'Invoice number already exists for this user.') {
          return setErrorMessage('Essa fatura já foi registrada!')
        }

        setErrorMessage('Erro ao registrar a fatura.')
      }

    }

  }

  if (isLoading) {
    return (
      <div className='flex flex-1 justify-center items-center'>
        <Loading />
      </div>
    )
  }


  return (
    <div className='w-full'>
      {
        showModal && (
          <BillModal
            data={modalData}
            closeModal={closeModal}
          />
        )
      }

      <Header
        title='Histórico de Faturas'
      />

      {
        uploadBill && (
          <div className='absolute flex flex-col overflow-y-auto max-h-[80vh] w-3/4 p-5 m-5 bg-gray-650 border-2 border-gray-650 rounded-lg text-gray-300'>

            <Header
              title='Registrar Fatura'
            />

            <form
              className='flex flex-col items-center'
              onSubmit={handleUploadBill}
            >

              <input type='file' name='file' id='file' className='mb-5' />

              {
                errorMessage &&
                <div className='text-red-400'>{errorMessage}</div>
              }

              {
                successMessage &&
                <div className='text-green-400'>{successMessage}</div>
              }

              <div className='mt-5'>
                <Button
                  name="Enviar"
                  type='submit'
                />
              </div>

            </form>

            <Button
              name="Fechar"
              variant='secondary'
              onClick={() => {
                setUploadBill(false)
                setErrorMessage('')
                setSuccessMessage('')
              }} />

          </div>
        )
      }

      <div className='flex justify-center items-center mb-2 gap-2'>
        <button onClick={() => setUploadBill(true)}>
          <Upload />
        </button>
      </div>

      <div className="w-3/4 m-auto bg-gray-700 border-2 border-gray-600 rounded-lg overflow-hidden">

        {
          energyBills && energyBills?.length > 0 ? (
            <table className='table-auto w-full'>
              <thead className='font-bold text-xl border-b-2 border-gray-500 text-gray-300'>
                <tr className=''>
                  <th className='pl-6 py-6'>Nº do cliente</th>
                  <th>Nº da instalação</th>
                  <th>Mês de referência</th>
                  <th>Energia elétrica consumida (kWh)</th>
                  <th className='pr-6 py-6'>Valor</th>
                </tr>
              </thead>
              <tbody className='text-center text-gray-100'>
                {
                  energyBills.map((bill: EnergyBillProps) => {
                    const transformedInvoiceTotal = bill.invoice_total.replaceAll('.', ',')

                    return (
                      <tr key={bill.id} onClick={() => {
                        setModalData(bill)
                        setShowModal(true)
                      }}
                      className='hover:bg-gray-600 cursor-pointer text-lg'
                      >
                        <td className='pl-6  py-4'>{bill.customer_number}</td>
                        <td>{bill.installation_number}</td>
                        <td>{bill.reference_month}</td>
                        <td>{bill.energy_amount}</td>
                        <td className='pr-6'>{transformedInvoiceTotal}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          ) : (
            <div className='flex flex-1 justify-center items-center p-10 text-xl'>
              Não há faturas registradas
            </div>
          )
        }

      </div>

    </div>
  )
}