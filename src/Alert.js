import React from 'react'

export default function Alert(props) {
  return (
    
     props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
  )
}
// import React from 'react';

// export default function Alert(props) {
//   const alertTypeClass = props.alert ? `alert-${props.alert.type}` : ''; // Adding the alert type as a class

//   return (
//     props.alert && (
//       <div className={`alert ${alertTypeClass} alert-dismissible fade show`} role="alert">
//         <strong>{props.alert.type}</strong> {props.alert.msg}
//         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//       </div>
//     )
//   );
// }
