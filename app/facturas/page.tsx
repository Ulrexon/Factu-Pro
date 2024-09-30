'use client';

import { useState } from "react";

// Simulación de datos de facturas
const initialInvoices = [
  { id: 1, title: "Factura #001", amount: "100€" },
  { id: 2, title: "Factura #002", amount: "200€" },
  { id: 3, title: "Factura #003", amount: "150€" },
  { id: 4, title: "Factura #004", amount: "250€" },
];

export default function FacturasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [invoices] = useState(initialInvoices); // Lista de facturas

  // Filtrar facturas según el término de búsqueda
  const filteredInvoices = invoices.filter(invoice =>
    invoice.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Gestión de Facturas</h1>
      <p className="mb-4">Aquí puedes gestionar todas tus facturas.</p>
      
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar facturas..."
        className="border rounded p-2 mb-4 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista de facturas */}
      <ul className="list-disc pl-5">
        {filteredInvoices.length > 0 ? (
          filteredInvoices.map(invoice => (
            <li key={invoice.id} className="mb-2 flex justify-between items-center">
              <span>{invoice.title} - {invoice.amount}</span>
              <div>
                <button
                  className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => alert(`Accediendo a ${invoice.title}`)}
                >
                  Acceder
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => alert(`Modificando ${invoice.title}`)}
                >
                  Modificar
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>No se encontraron facturas.</li>
        )}
      </ul>
    </div>
  );
}
