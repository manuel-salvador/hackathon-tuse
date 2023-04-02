import React, { useState } from 'react';

import PageLayout from '@/layouts/PageLayout';
import ButtonWithdraw from '@/components/Buttons/ButtonWithdraw';
import ButtonDeposit from '@/components/Buttons/ButtonDeposit';

type Props = {};

export default function VaultPage({}: Props) {
  const [amount, setAmount] = useState(0.01);

  return (
    <PageLayout title="Vault">
      <div className="mt-28 flex flex-col md:flex-row gap-8 w-full max-w-screen-xl mx-auto">
        <div className="border p-8 flex-1 flex flex-col items-center gap-8">
          <div className="w-40 h-40 bg-gray-600">image</div>
          <div className="flex flex-col gap-1">
            <label htmlFor="amount">Monto (ETH)</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0.01"
              type="number"
              placeholder="Monto"
              name="amount"
              className="bg-transparent text-white border-b-2 focus:border-b-transparent py-2 px-3  rounded"
              required
            />
          </div>
          <ButtonDeposit />
        </div>
        <div className="border p-8 flex-1 flex flex-col items-center gap-8">
          <div className="w-40 h-40 bg-gray-600">image</div>
          <div className="text-center">
            <p>Monto a retirar</p>
            <p>2.4 ETH</p>
          </div>
          <ButtonWithdraw />
        </div>
      </div>
    </PageLayout>
  );
}
