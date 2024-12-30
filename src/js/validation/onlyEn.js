// Type English Name Validatoion
function onlyEn(e) {
  var charCode = e.charCode;
  console.log(charCode);
  if (charCode < 32 || charCode > 255) {
    alert(1);
    console.log("Catch");
    return false;
  }
  console.log("Un-Catch");
  return true;
}
export default onlyEn;
