!function(e){
  // var l=new ScrollMagic.Controller,i=["#mission", "#companyreview","#team","#contact"];
  var l=new ScrollMagic.Controller,i=["#mission", "#companyreview","#team"];
  if(!Modernizr.touch){
    i.forEach(function(e,i){
      {
        var r=i+1;new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle(e,"is-active").addTo(l)
      }
    });
    {
      new ScrollMagic.Scene({triggerElement:".slide.is-light"}).setClassToggle("nav","is-dark").addTo(l)
    }
  }
}(jQuery);
