// app/facturas/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation'; // Importa useParams

export default function FacturaDetalle() {
  const { id } = useParams(); // Obtén el id de los parámetros de la URL

  return (
    <div>
      <h1>Detalle de la Factura {id}</h1>
      {/* Aquí puedes mostrar los detalles de la factura usando el ID */}
    </div>
  );
}
