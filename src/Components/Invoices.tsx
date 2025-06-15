import React from 'react';
import { FaFileInvoice, FaShareAlt, FaDownload } from 'react-icons/fa';

interface Invoice {
  id: string;
  invoiceNumber: string;
  property: string;
  guest: string;
  total: number;
}

const Invoices: React.FC = () => {
  const invoices: Invoice[] = [
    {
      id: '1',
      invoiceNumber: 'INV-2025-001',
      property: 'Cozy Villa Retreat',
      guest: 'John Doe',
      total: 36000,
    },
    {
      id: '2',
      invoiceNumber: 'INV-2025-002',
      property: 'Seaside Cottage',
      guest: 'Jane Smith',
      total: 33600,
    },
    {
      id: '3',
      invoiceNumber: 'INV-2025-003',
      property: 'Mountain Lodge',
      guest: 'Alice Brown',
      total: 42200,
    },
  ];

  const formatIndianRupee = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleShare = async (invoice: Invoice) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Invoice #${invoice.invoiceNumber}`,
          text: `Invoice #${invoice.invoiceNumber} for ${invoice.property} (Guest: ${invoice.guest}, Total: ${formatIndianRupee(invoice.total)})`,
          url: window.location.href, // You might want a specific URL for the invoice
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    } else {
      alert('Web Share API is not supported in this browser.');
      console.log(`Simulating share for Invoice #${invoice.invoiceNumber}`);
    }
  };

  const handleDownload = (invoice: Invoice) => {
    const invoiceContent = `Invoice Number: ${invoice.invoiceNumber}\nProperty: ${invoice.property}\nGuest: ${invoice.guest}\nTotal: ${formatIndianRupee(invoice.total)}`;
    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice_${invoice.invoiceNumber}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log(`Downloading Invoice #${invoice.invoiceNumber}`);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="bg-rose-50 p-6 rounded-2xl shadow-sm flex items-start justify-between"
        >
          <div className="flex items-start gap-4">
            <FaFileInvoice className="text-rose-500 text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Invoice #{invoice.invoiceNumber}
              </h2>
              <p className="text-gray-700 text-lg">
                Property: {invoice.property}
              </p>
              <p className="text-gray-700 text-lg">
                Guest: {invoice.guest}
              </p>
              <p className="text-gray-900 text-xl font-bold mt-2">
                Total: {formatIndianRupee(invoice.total)}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 pt-1">
            <FaShareAlt
              className="text-rose-500 text-2xl cursor-pointer"
              onClick={() => handleShare(invoice)}
            />
            <FaDownload
              className="text-rose-500 text-2xl cursor-pointer"
              onClick={() => handleDownload(invoice)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Invoices; 