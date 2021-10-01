
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router'

function Product() {

  const history = useHistory();
  const list = useSelector(state => state.list);

  const dispatch = useDispatch();

  const buyhandler = () => {

    dispatch({type:'buy'})
  }




  return (
    <>
      {list.map((item) => {
        return <>
          <div className="botcard">
            <div className="botname">{item.bot}</div>
            <div className="botvalues">
              <div>
                <p className="heading">Index value</p>
                <p className="value1">{item.index}</p>
              </div>
              <div>
                <p className="heading">CAGR</p>
                <p className="value2">{item.cagr}</p>
              </div>
            </div>
            <div className="botbtns">
              <button onClick={()=>{return(history.push(`/bots-details/${item.id}`))}}>View algo</button>
              <button onClick={buyhandler}>Buy</button>
            </div>
          </div>
        </>
      })}
    </>
  )




}

export default Product

// const id = useSelector(state => state.id);
//   const bot = useSelector(state => state.bot);
//   const description = useSelector(state => state.description);
//   const index = useSelector(state => state.index);
//   const cagr = useSelector(state => state.cagr);