
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface HomePageProps {
  ipAddress: string;
  ipFromNext: any
}

function HomePage({ ipAddress,ipAddressCustoms }: any) {
    
    
  return (
    <div>
      <h1>Next.js Page</h1>
      <p>Dirección IP del usuario: {ipAddress}</p>
      <p>Dirección ipcountry: {ipAddressCustoms}</p>

      {/* Contenido de la página */}
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // Obtiene la dirección IP del usuario desde el encabezado X-Forwarded-For o la dirección remota
  const ipAddress = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress;
  const ipAddressCustoms = context.req.headers['cf-ipcountry'] || "undefined00";


  

  // Devuelve los datos como props
  return {
    props: {
      ipAddress,
      ipAddressCustoms
    },
  };
};

export default HomePage;