import { useEffect, useState } from "react";
import { movimientosMock } from "../data/movimientosMock";

function Movimientos() {
  const [movimientos, setMovimientos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMovimientos(movimientosMock);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p>Cargando movimientos...</p>;

 return (
  <div className="movimientos">
    <h2>Movimientos</h2>

    <ul>
      {movimientos.map((mov) => (
        <li key={mov.id} className="movimiento">
          <span>{mov.descripcion}</span>
          <span className={mov.monto >= 0 ? "positivo" : "negativo"}>
            ${mov.monto.toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

}

export default Movimientos;
