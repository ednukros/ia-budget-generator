export default function Home() {
  return (
    <main className="presupuesto">
      <div className="presupuesto__container max-w-xl mx-auto py-10 px-4">
        <h1 className="presupuesto__title text-3xl font-bold mb-6">
          Generador de presupuestos personalizados
        </h1>

        <form className="presupuesto__form space-y-5">
          {/* Tipo de servicio */}
          <div className="presupuesto__field">
            <label htmlFor="servicio" className="presupuesto__label block font-medium mb-1">
              Tipo de servicio
            </label>
            <select
              id="servicio"
              name="servicio"
              className="presupuesto__input w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="web">Sitio web</option>
              <option value="tienda">Tienda online</option>
              <option value="branding">Branding</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          {/* Estilo de comunicación */}
          <div className="presupuesto__field">
            <label htmlFor="tono" className="presupuesto__label block font-medium mb-1">
              Estilo de comunicación
            </label>
            <select
              id="tono"
              name="tono"
              className="presupuesto__input w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="profesional">Profesional</option>
              <option value="cercano">Cercano</option>
              <option value="creativo">Creativo</option>
            </select>
          </div>

          {/* Plazo */}
          <div className="presupuesto__field">
            <label htmlFor="plazo" className="presupuesto__label block font-medium mb-1">
              Plazo estimado (en semanas)
            </label>
            <input
              type="number"
              id="plazo"
              name="plazo"
              min="1"
              className="presupuesto__input w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          {/* Presupuesto */}
          <div className="presupuesto__field">
            <label htmlFor="presupuesto" className="presupuesto__label block font-medium mb-1">
              Presupuesto aproximado (€)
            </label>
            <input
              type="number"
              id="presupuesto"
              name="presupuesto"
              min="100"
              className="presupuesto__input w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="presupuesto__submit bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Generar presupuesto
          </button>
        </form>
      </div>
    </main>
  )
}
