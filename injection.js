//https://www.npmjs.com/package/downloadjs
//https://github.com/eligrey/FileSaver.js/

//jssrc='https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.min.js'
jssrc='https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.8/download.min.js'
//jssrc='http://localhost:8003/download.js'

jspayload='<script src="'+jssrc+'"></script>'
$('head').append(jspayload)


function injection()
{
  
    
  $("#resources [href*='get_resource']").css('color','lightgreen')
  
  links = $("[href*='get_resource']")
  
  for (var i=0; i<links.length; i++)
  {
    link = links.eq(i)
    
    filepath = link[0].getAttribute('href')
    filename = link.children('div').html()
    
    if(filename)
    {
      //console.log(filename)
      //link.children('div').html(`${filename}| [get]`)
      
      link.click((event)=>{
        //alert(filename);
        
        __filepath = $(event.target).parent().attr('href')
        __filename = $(event.target).html()
        //alert(__filepath)
        //download(window.location.origin+__filepath,__filename)
        
        var x=new XMLHttpRequest();
        x.open( "GET", __filepath, true);
        x.responseType="blob";
        x.onload= function(e){download(e.target.response, __filename, "application/pdf");};
        x.send();
                
        //saveAs(window.location.origin+__filepath,__filename)
        return false
        
      })
    }
    
  }
}

setTimeout(injection,3000)
