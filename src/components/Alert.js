import React, { useContext } from 'react'
import alertContext from '../context/alert/alertContext'

 const Alert = (props) => {

  const a = useContext(alertContext);

  const {alert} = a;

    return (
    <div style={{height:"50px"}}>
   {  alert && ( <div className={`alert alert-${alert.type}`} role="alert">
        {alert.msg}

      </div>)}
    </div>

    )
}
export default Alert
