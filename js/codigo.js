// MRU: Cálculo de Velocidad (d = v * t)
function calcularVelocidad() {
    const distancia = parseFloat(document.getElementById("distancia-vel").value);
    const tiempo = parseFloat(document.getElementById("tiempo-vel").value);

    if (isNaN(distancia) || isNaN(tiempo) || tiempo === 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const velocidad = distancia / tiempo;
    document.getElementById("resultado-velocidad").innerText = `La velocidad es: ${velocidad.toFixed(2)} m/s`;
}

// MRU: Cálculo de Tiempo (t = d / v)
function calcularTiempo() {
    const distancia = parseFloat(document.getElementById("distancia-tmp").value);
    const velocidad = parseFloat(document.getElementById("velocidad-tmp").value);

    if (isNaN(distancia) || isNaN(velocidad) || velocidad === 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const tiempo = distancia / velocidad;
    document.getElementById("resultado-tiempo").innerText = `El tiempo es: ${tiempo.toFixed(2)} segundos`;
}

// MRU: Cálculo de Distancia (d = v * t)
function calcularDistancia() {
    const velocidad = parseFloat(document.getElementById("velocidad-dist").value);
    const tiempo = parseFloat(document.getElementById("tiempo-dist").value);

    if (isNaN(velocidad) || isNaN(tiempo)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const distancia = velocidad * tiempo;
    document.getElementById("resultado-distancia").innerText = `La distancia es: ${distancia.toFixed(2)} metros`;
}

// MRUV: Cálculo de Aceleración (a = (v_f - v_i) / t)
function calcularAceleracion() {
    const vi = parseFloat(document.getElementById("velocidad-inicial").value);
    const vf = parseFloat(document.getElementById("velocidad-final").value);
    const tiempo = parseFloat(document.getElementById("tiempo-acel").value);

    if (isNaN(vi) || isNaN(vf) || isNaN(tiempo) || tiempo === 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const aceleracion = (vf - vi) / tiempo;
    document.getElementById("resultado-aceleracion").innerText = `La aceleración es: ${aceleracion.toFixed(2)} m/s²`;
}

// MRUV: Cálculo de Distancia (d = v_i * t + 0.5 * a * t²)
function calcularDistanciaMRUV() {
    const vi = parseFloat(document.getElementById("velocidad-inicial-dist").value);
    const a = parseFloat(document.getElementById("aceleracion-dist").value);
    const tiempo = parseFloat(document.getElementById("tiempo-dist").value);

    if (isNaN(vi) || isNaN(a) || isNaN(tiempo)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const distancia = vi * tiempo + 0.5 * a * tiempo * tiempo;
    document.getElementById("resultado-distancia-mruv").innerText = `La distancia es: ${distancia.toFixed(2)} metros`;
}

// MRUV: Cálculo de Velocidad Final (v_f = v_i + a * t)
function calcularVelocidadFinal() {
    const vi = parseFloat(document.getElementById("velocidad-inicial-final").value);
    const a = parseFloat(document.getElementById("aceleracion-final").value);
    const tiempo = parseFloat(document.getElementById("tiempo-final").value);

    if (isNaN(vi) || isNaN(a) || isNaN(tiempo)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const vf = vi + a * tiempo;
    document.getElementById("resultado-velocidad-final").innerText = `La velocidad final es: ${vf.toFixed(2)} m/s`;
}
