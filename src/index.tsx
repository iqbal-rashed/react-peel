import {useRef,useEffect} from 'react'
import "./peel.css";

import PeelJs from "./peel";

function PeelWrapper() {

  const ref =  useRef<HTMLDivElement>(null);
  let peelRef = useRef(null)

  useEffect(() => {
    peelRef.current = new PeelJs(ref.current!,{})
  
    return () => {
     peelRef.current && 
    }
  }, [])
  

  return <div ref={ref}>
    
  </div>;
}

export function PeelTop() {}
export function PeelBack() {}

export function PeelBottom() {}

export default PeelWrapper;
