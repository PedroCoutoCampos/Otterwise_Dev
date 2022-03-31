import { useBox } from '../context/box-context'
import {StyleBox, Button} from './styles'


const Box = (props) => {
  const { state, type } = props
  const { dispatch } = useBox()

  return (
    <StyleBox className="box">
      {state.map((button) => (
        <Button
          className="button"
          onClick={() => dispatch({ type: type, id: button.id })}
        >
          <span>{button.name}</span>
        </Button>
      ))}
    </StyleBox>
  )
}

export default Box
