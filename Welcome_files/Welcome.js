// Created by iWeb 3.0.2 local-build-20100930

setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return true;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
detectBrowser();adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
