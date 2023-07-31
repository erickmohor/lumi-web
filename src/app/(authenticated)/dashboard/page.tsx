/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { Cable, DollarSign, Leaf, Lightbulb, Sun, UtilityPole, Zap } from 'lucide-react'

import { api } from '@/lib/api'
import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading'
import { MainItem } from '@/components/MainItem'
import { EnergyBillProps } from '../faturas/page'


interface IData {
  totalEnergy: number,
  totalInjectedEnergy: number,
  totalCompensatedEnergy: number,
  lastEnergy: string,
  lastInjectedEnergy: string,
  lastCompensatedEnergy: string,
  lastInvoiceTotal: string,
}

export default function Dashboard() {
  const [data, setData] = useState<IData>()
  const [isLoading, setIsLoading] = useState(false)

  let totalEnergy = 0
  let totalInjectedEnergy = 0
  let totalCompensatedEnergy = 0

  useEffect(() => {
    async function getData() {
      setIsLoading(true)

      const { data } = await api.get('/energy-bill/all')

      if (data.energyBills.length > 0) {
        data.energyBills.forEach((value: EnergyBillProps) => {
          totalEnergy += Number(value.energy_amount)
          totalInjectedEnergy += Number(value.injected_energy_amount)
          totalCompensatedEnergy += Number(value.compensated_energy_amount)
        })

        setData({
          totalEnergy,
          totalInjectedEnergy,
          totalCompensatedEnergy,
          lastEnergy: data.energyBills[0].energy_amount,
          lastInjectedEnergy: data.energyBills[0].injected_energy_amount,
          lastCompensatedEnergy: data.energyBills[0].compensated_energy_amount,
          lastInvoiceTotal: data.energyBills[0].invoice_total.replaceAll('.', ','),
        })
      }

      setIsLoading(false)
    }

    getData()
  }, [])

  if (isLoading) {
    return (
      <div className='flex flex-1 justify-center items-center'>
        <Loading />
      </div>
    )
  }


  return (
    <div className='w-full'>

      <Header
        title="Dashboard"
      />

      <div className='flex flex-1 flex-wrap justify-between mb-10 gap-5'>
        <MainItem
          icon={Zap}
          iconColor='#F9FC5E'
          title='Total de Energia Gerada'
          subtitle={`${data?.totalInjectedEnergy ?? 0} kWh`}
        />

        <MainItem
          icon={UtilityPole}
          iconColor='#FCA15E'
          title='Total de Energia Consumida'
          subtitle={`${data?.totalEnergy ?? 0} kWh`}
        />

        <MainItem
          icon={Cable}
          iconColor='#5EC3FC'
          title='Total de Energia Compensada'
          subtitle={`${data?.totalCompensatedEnergy ?? 0} kWh`}
        />
      </div>

      <div className='flex flex-1 flex-wrap justify-between mb-10 gap-5'>
        <MainItem
          icon={Lightbulb}
          iconColor='#FCA15E'
          title='Última Energia Consumida'
          subtitle={`${data?.lastEnergy ?? 0} kWh`}
        />

        <MainItem
          icon={Sun}
          iconColor='#F9FC5E'
          title='Última Energia Gerada'
          subtitle={`${data?.lastInjectedEnergy ?? 0} kWh`}
        />

        <MainItem
          icon={Leaf}
          iconColor='#36dc81'
          title='Última Energia Compensada'
          subtitle={`${data?.lastCompensatedEnergy ?? 0} kWh`}
        />

        <MainItem
          icon={DollarSign}
          iconColor='#36dc81'
          title='Último Valor Cobrado'
          subtitle={`R$ ${data?.lastInvoiceTotal ?? 0}`}
        />
      </div>

    </div>
  )
}