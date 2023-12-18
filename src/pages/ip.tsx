
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface HomePageProps {
  ipAddress: string;
  ipFromNext: any
}

function HomePage({ ipAddress,ipAddressCustoms,ipAddressCustom1,ipAddressCustom2 }: any) {
    
    
  return (
    <div>
      <h1>Next.js Page</h1>
      <p>Dirección IP del usuario: {ipAddress}</p>
      <p>Dirección ipcountry: {ipAddressCustoms}</p>
      <p>Dirección ipAddressCustom1 CF-IPCountry: {ipAddressCustom1}</p>
      <p>Dirección ipAddressCustom2 X-Country: {ipAddressCustom2}</p>


      {/* Contenido de la página */}
    </div>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  // Obtiene la dirección IP del usuario desde el encabezado X-Forwarded-For o la dirección remota
  const ipAddress = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress;
  const ipAddressCustoms = context.req.headers['cf-ipcountry'] ||"undefined-cf-ipcountry";
  const ipAddressCustom1 = context.req.headers['CF-IPCountry'] ||"undefined-CF-IPCountry";
  const ipAddressCustom2 = context.req.headers['X-Country'] ||"undefined-X-Country";


  // Devuelve los datos como props
  return {
    props: {
      ipAddress,
      ipAddressCustoms,
      ipAddressCustom1,
      ipAddressCustom2
    },
  };
};

export default HomePage;