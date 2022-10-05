import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/Containers/ItemDetailContainer";
import ItemListContainer from '../../components/Containers/ItemListContainer'

const Hotels = () => {

  const param = useParams()
  return (
    <>
      {param.id ? (<ItemDetailContainer />) : <ItemListContainer />}
    </>
  )
}

export default Hotels