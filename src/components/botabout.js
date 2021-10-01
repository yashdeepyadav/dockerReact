import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

function Botabout() {
  const params = useParams();
  const list = useSelector(state => state.list)
  const x = params.id - 1;

  const dispatch = useDispatch();

  const buyhandler = () => {

  dispatch({ type: 'buy' })
  }
  return (
    <>
      <div class="botdescripcard">
        <div class="botvalue">
          <p>{list[x].bot}</p>
          <p class='botabout'>
            {list[x].description}
          </p>
        </div>

        <div>
          <p class="heading">Index value</p>
          <p class="value1">{list[x].index}</p>
        </div>
        <div>
          <p class="heading">CAGR</p>
          <p class="value2">{list[x].cagr}</p>
        </div>
        <button onClick={buyhandler}>Buy</button>
      </div>
    </>
  )

}

export default Botabout