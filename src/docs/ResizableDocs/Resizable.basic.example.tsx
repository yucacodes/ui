/** @jsxImportSource @builder.io/qwik */ // __EXCLUDE__
import { Resizable } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <div style={{padding: "1rem", display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}> {/*__EXCLUDE__*/}
<Resizable 
  style={{ 
    minWidth: "5rem", 
    maxWidth: "15rem", 
    minHeight: "5rem", 
    maxHeight: "15rem", 
    background: "yellow",
    padding: "1rem", 
  }}
>
  resize the box
</Resizable>
  </div> // __EXCLUDE__
) // __EXCLUDE__
