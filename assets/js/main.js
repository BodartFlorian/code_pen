const htmlTextArea = document.querySelector('#htmlText');
const htmlCounter = document.querySelector('#htmlCounter');
const cssTextArea = document.querySelector('#cssText');
const cssCounter = document.querySelector('#cssCounter');
const jsTextArea = document.querySelector('#jsText');
const jsCounter = document.querySelector('#jsCounter');
const htmlProgressBar = document.querySelector('#htmlProgressBar');
const cssProgressBar = document.querySelector('#cssProgressBar');
const jsProgressBar = document.querySelector('#jsProgressBar');
const codeLive = document.querySelector('#codeLive');
const htmlHidden = document.querySelector('#htmlHidden');
const maxlength = 400;
const halfProgressBar = (maxlength / 2);
const splitProgressBar = (maxlength / 100);
const almostFullProgressBar = (splitProgressBar * 80);
const loader = document.querySelector('#loader');
const containerCircle = document.querySelector('#containerCircle');
const cercle1 = document.querySelector('#cercle1');
const cercle2 = document.querySelector('#cercle2');



 // function textarea maxlength
 function MaxLengthTextarea(objettextarea){
  if (objettextarea.value.length > maxlength) {
    objettextarea.value = objettextarea.value.substring(0, maxlength);
    alert('Votre texte ne doit pas dépasser '+maxlength+' caractères!');
   }
   
   // change value progress bar html
    htmlProgressBar.style.width = ((htmlHidden.value.length / splitProgressBar) + "%");

   // change style progress bar html
    if (htmlTextArea.value.length < halfProgressBar){
    // change style 
    htmlProgressBar.style.background = "green";
    } else if (htmlTextArea.value.length >= halfProgressBar && htmlTextArea.value.length < almostFullProgressBar) {
    htmlProgressBar.style.background = "orange";
    } else {
    htmlProgressBar.style.background = "red";
    }

    // change value progress bar css
    cssProgressBar.style.width = ((cssTextArea.value.length / splitProgressBar) + "%");

       // change style progress bar css
    if (cssTextArea.value.length < halfProgressBar){
    // change style 
    cssProgressBar.style.background = "green";
    } else if (cssTextArea.value.length > halfProgressBar && cssTextArea.value.length < almostFullProgressBar) {
    cssProgressBar.style.background = "orange";
    } else {
    cssProgressBar.style.background = "red";
    }

         // change value progress bar js
    jsProgressBar.style.width = ((jsTextArea.value.length / splitProgressBar) + "%");

       // change style progress bar js
    if (jsTextArea.value.length < halfProgressBar){
    // change style 
    jsProgressBar.style.background = "green";
    } else if (jsTextArea.value.length > halfProgressBar && jsTextArea.value.length < almostFullProgressBar) {
    jsProgressBar.style.background = "orange";
    } else {
    jsProgressBar.style.background = "red";
    }
}


// counter html
htmlTextArea.addEventListener('keyup', function(){
    htmlHidden.innerHTML = htmlTextArea.value.replace(/<[^>]+>/g, '');
    htmlCounter.innerHTML = (htmlHidden.value.length + ' / ' + maxlength);
});
// counter css
 cssTextArea.addEventListener('keyup', function() {
        cssCounter.innerHTML = (cssTextArea.value.length + ' / ' + maxlength);
    });
// counter js
 jsTextArea.addEventListener('keyup', function() {
        jsCounter.innerHTML = (jsTextArea.value.length + ' / ' + maxlength);
    });


// function live code from textarea into iframe
function live(){
    const writeHtmlTextArea = htmlTextArea.value;
    const writeCssTextArea = "<style>" + cssTextArea.value + "</style>";
    const writeJsTextArea = "<script>" + jsTextArea.value + "</script>";
    
    codeLive.contentWindow.document.open();
    codeLive.contentWindow.document.write(writeHtmlTextArea + writeCssTextArea + writeJsTextArea);
    console.log(writeHtmlTextArea);
    console.log(writeJsTextArea);
    codeLive.contentWindow.document.close();
}


// over textarea loader html
// enable
htmlTextArea.addEventListener('mouseenter', function(){
    loader.style.display = "block";
    containerCircle.style.display ="block";
    cercle1.style.display ="block";
    cercle2.style.display ="block";
});
// disable
htmlTextArea.addEventListener('mouseout', function(){
    loader.style.display = "";
    containerCircle.style.display ="";
    cercle1.style.display ="";
    cercle2.style.display ="";
});

// over textarea loader css
// enable
cssTextArea.addEventListener('mouseover', function(){
    loader.style.display = "block";
    containerCircle.style.display ="block";
    cercle1.style.display ="block";
    cercle2.style.display ="block";
});
// disable
cssTextArea.addEventListener('mouseout', function(){
    loader.style.display = "";
    containerCircle.style.display ="";
    cercle1.style.display ="";
    cercle2.style.display ="";
});

// over textarea loader html
// enable
jsTextArea.addEventListener('mouseover', function(){
     loader.style.display = "block";
    containerCircle.style.display ="block";
    cercle1.style.display ="block";
    cercle2.style.display ="block";
});
// disable
jsTextArea.addEventListener('mouseout', function(){
    loader.style.display = "";
    containerCircle.style.display ="";
    cercle1.style.display ="";
    cercle2.style.display ="";
});