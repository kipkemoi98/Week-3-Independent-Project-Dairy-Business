document.getElementById("submit-btn").onclick=function(){
    let sheds={
        A:document.getElementById("q"),
        B:document.getElementById("z"),
        C:document.getElementById("y"),
        D:document.getElementById("p"),
    }
    let production=
        document.getElementById("G").value="Your productions in shed A is " + q.value+ " litres per day"
        document.getElementById("K").value="Your productions in shed B is " + z.value + " litres per day"
        document.getElementById("L").value="Your productions in shed C is " + y.value + " litres per day"
        document.getElementById("I").value="Your productions in shed D is " + p.value + " litres per day"
        document.getElementById("O").value="Your productions in shed Total is " + Total+ " litres per day"

}
