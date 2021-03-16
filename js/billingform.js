function billingFunction()
{  
    var shippingname= document.getElementById('shippingName').value;
    var shippingzip= document.getElementById('shippingZip').value;
    

    if(document.getElementById('same').checked)
    {
        document.getElementById("billForm").style.display="inline";
       document.getElementById("billingName").value= shippingname;
       document.getElementById("billingZip").value= shippingzip;
    }
    else
    {
        // document.getElementById("billForm").style.display="none";
        document.getElementById("billingName").value= " ";
       document.getElementById("billingZip").value= " ";

    }

    
}