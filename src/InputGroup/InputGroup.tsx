import InputLabel from "../InputLabel";
import InputText from "../InputText";
import InputAnnotation from "../InputAnnotation";
import styles from './InputGroup.module.scss';
import { useContext, useEffect } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { ACTIONS } from "../helpers/utils";

type Props = {
  size?: string,
  alignment?: string,
  border?: boolean,
  iconBefore?: boolean,
  iconAfter?: boolean,
  shortKey?: boolean,
  isRequired?: {
    required: boolean,
    type: string,
  },
  label?: string,
  annotation?: string,
}

const InputGroup: React.FC<Props> = ({...args}) => {
  const { dispatch } = useContext(AppStateContext);
  console.log(args);
  
  useEffect(() => {
    if (Object.keys(args).length > 0) {
      
      
      for (const property in args) {
        // dispatch()
        console.log(property, typeof args[property as keyof Props], 'there are the args');
        dispatch({
          type: ACTIONS.MAP_PROPS_TOP_STATE, payload: {
            key: property,
            value: args[property as keyof Props],
        }  })
      }
      // dispatch({ type: ACTIONS.SET_LABEL, payload: args.label || '' })
    }
  }, []);

  

  return (
    <div className={styles.box}>
      <InputLabel />
      <InputText />
      <InputAnnotation />
    </div>
  )
}

export default InputGroup;