import InputLabel from "../InputLabel";
import InputText from "../InputText";
import InputAnnotation from "../InputAnnotation";
import styles from './InputGroup.module.scss';
import { useContext, useEffect } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { ACTIONS } from "../helpers/utils";

type Props = {
  size?: 's' | 'm' | 'l' | 'xl',
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
  type?: string,
  showPopUp?: boolean,
  popUpText?: string,
  labelPosition?: 'top' | 'side',
  popUpDestination?: 'info' | 'question',
  onChange?: (data: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputGroup: React.FC<Props> = ({...args}) => {
  const { dispatch } = useContext(AppStateContext);
  useEffect(() => {
    if (Object.keys(args).length > 0) {
      for (const property in args) {
        dispatch({
          type: ACTIONS.MAP_PROPS_TOP_STATE, payload: {
            key: property,
            value: args[property as keyof Props],
        }  })
      }
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