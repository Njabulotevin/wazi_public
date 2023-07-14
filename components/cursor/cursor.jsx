import React from "react"
import $ from 'jquery';




export default function Cursor()  {

    function activeCursor () {
        $('.cursor').eq(1).css({
            width: '72px',
            height: '72px'
          });
      }
    
    function inactiveCursor () {
        $('.cursor').eq(1).css({
            width: '22px',
            height: '22px'
          });
      }

    React.useEffect(()=>{
        $(document).mousemove(function(e) {
            $('.cursor').eq(0).css({
                left: e.clientX,
                top: e.clientY
              });
            setTimeout(function() {
              $('.cursor').eq(1).css({
                  left: e.clientX,
                  top: e.clientY
                });
            }, 100);
          });
        
        
    },[])
    
   
      
  
      return (<div className="bg">
        <div className="cursor"></div>
  <div className="cursor"></div>
        <div className="color" onMouseOut={() => inactiveCursor()} onMouseOver={() => activeCursor()} onClick={() => inactiveCursor()}></div>
        <div className="color2" onMouseOut={() => inactiveCursor()} onMouseOver={() => activeCursor()} onClick={() => inactiveCursor()}></div>
       
      </div>);
    
  }