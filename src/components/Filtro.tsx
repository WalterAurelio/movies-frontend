// SÍ
type FiltroProps = {
  filtros?: string[];
}

function Filtro({ filtros }: FiltroProps) {
  const filtrosArr = filtros ? filtros : ['Más relevantes', 'Más nuevos', 'Más antiguos'];
  
  return (
    <div className='flex text-blanco-main'>
      <label htmlFor='movieFilters' className='text-sm lg:text-base'>Ordenar por:</label>
      <select
        name='movieFilters'
        id='movieFilters'
        className='text-sm lg:text-base font-bold outline-0'
        onChange={(e) => console.log(e.target.value)}
      >
        {
          filtrosArr.map((filtro, index) =>
            <option
              key={index}
              value={filtro}
              className='text-negro-main'
            >
              {filtro}
            </option>
          )
        }
      </select>
    </div>
  )
}
export default Filtro