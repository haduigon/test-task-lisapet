import InputLabel from "../InputLabel";
import InputText from "../InputText";
import InputAnnotation from "../InputAnnotation";
import styles from './InputGroup.module.scss';
import { useContext, useEffect } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { ACTIONS } from "../helpers/utils";
import classNames from "classnames";

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
    text: string,
  },
  label?: string,
  annotation?: string,
  type?: string,
  showPopUpInfo?: boolean,
  showPopUpQuestion?: boolean,
  popUpText?: string,
  questionText?: string,
  labelSidePosition?: boolean,
  disabled?: boolean,
  darkMode?: boolean,
  placeholder?: string,
  onChange?: (data: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeIconBefore?: (data: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeIconAfter?: (data: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputGroup: React.FC<Props> = ({...args}) => {
  const { state, dispatch } = useContext(AppStateContext);

  const showAnnotation = state?.annotation?.length > 0 && !state.labelSidePosition;
  console.log(args,'state insaide InputGroup');
  
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
  }, [JSON.stringify(args), dispatch]);

  return (
    <div
      className={classNames({
        [styles.box]: !state.labelSidePosition,
        [styles.sideBox]: state.labelSidePosition,
      })}
    >
      <InputLabel />
      <InputText />
      {showAnnotation && <InputAnnotation />}
    </div>
  )
}

export default InputGroup;