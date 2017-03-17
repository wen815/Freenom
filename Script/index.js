var sersub= document.getElementById("ser-sub");
 sersub.style.display='none';
 var csub= document.getElementById("c-sub");
 csub.style.display='none';
 var asub= document.getElementById("a-sub");
 asub.style.display='none';
 var ssub= document.getElementById("s-sub");
 ssub.style.display='none'; 
var lan= document.getElementById("lan");
 lan.style.display='none';
 
function fser(){   
     csub.style.display='none'; asub.style.display='none'; ssub.style.display='none';  lan.style.display='none';
    if( sersub.style.display==='block'){
   sersub.style.display='none';
    }
    else  {
   sersub.style.display='block';
    }
}

function fc(){   
      sersub.style.display='none'; asub.style.display='none'; ssub.style.display='none';  lan.style.display='none';
    if( csub.style.display==='block'){
   csub.style.display='none';
    }
    else  {
   csub.style.display='block';
    }
}


function fa(){   
        csub.style.display='none'; sersub.style.display='none'; ssub.style.display='none';  lan.style.display='none';
    if( asub.style.display==='block'){
   asub.style.display='none';
    }
    else  {
   asub.style.display='block';
    }
}


function fs(){   
        csub.style.display='none'; asub.style.display='none'; sersub.style.display='none';  lan.style.display='none';
    if( ssub.style.display==='block'){
   ssub.style.display='none';
    }
    else  {
   ssub.style.display='block';
    }
}

function flan(){   
        csub.style.display='none'; asub.style.display='none'; sersub.style.display='none';  ssub.style.display='none';
    if( lan.style.display==='block'){
   lan.style.display='none';
    }
    else  {
   lan.style.display='block';
    }
}

function fclose(){   
        csub.style.display='none'; asub.style.display='none'; sersub.style.display='none';  ssub.style.display='none';
      lan.style.display='none';
}
