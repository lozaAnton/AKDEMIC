
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar"; // importacion de los componenete
const DashboardLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
    return (
        <div className="h-full "> {/*h-full altura completa */}
            {/*altura de 80px
                md:pl-56 relleno padding izquierda 
                fixed : div de forma fija , aun cuando se haga scroll 
                inset-y-0:coloca el div en la parte superior e inferior de la ventana
                w-full:establece el ancho div para que ocupe el 100% de su contenedor padre
                z-50:significa que el div estara por encima de otros elementos 
            */}
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
               <Navbar/>


            </div>

            {/*hidden :oculta el div por defecto en pantallas pequeñas
                flex-col:hace que los elementos secundarios se apilen verticalmente
                inset-y-0:coloca el div en la parte superior e inferior de la ventana
                z-50:se muestra por encima de otros elementos 
                md:flex ->md:se aplicara en pantallas medianas ; flex:se organizan en fila o en columna
            */}
           <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50"> 
                <Sidebar/>
           </div>

            <main className="md:pl-56 pt-[80px] h-full ">
                {children}
            </main>
        </div>
      );
}
 
export default DashboardLayout;