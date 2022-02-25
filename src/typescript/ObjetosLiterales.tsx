
//Las interfaces sirven para poner reglas de validaciones a nuestros objetos.
//Se define la interfaz del Objeto Principal
interface Persona {
    nombreCompleto:string;
    edad:number;
    direccion: Direccion;
}
//Luego las interfaces de los demas objetos del objeto principal.
interface Direccion {
    paisResidencia:string;
    casaAdress: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "Facundo",
        edad: 35,
        direccion: {
            paisResidencia: 'Argentina',
            casaAdress: '520'
        }
    }

    return (
        <div>
            <code>
                <pre>
                    {JSON.stringify (persona,null,5)}
                </pre>
            </code>
        </div>
    )
}