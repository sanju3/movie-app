import {useEffect} from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CustomDialog = ({operations, title, description, visibility}) => {
  useEffect(() => {
    confirmAlert({
      title: title,
      message: description,
      buttons: [
        {
          label: operations[0].label,
          onClick: () => operations[0].method(operations[0].data),
        },
        {
          label: 'No',
          onClick: () => visibility(),
        },
      ],
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  }, [operations, title, description, visibility]);

  return false;
};
export default CustomDialog;
