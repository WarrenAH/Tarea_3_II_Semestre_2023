const sql = require("mssql/msnodesqlv8");

// Configuración de la cadena de conexión para Windows Authentication
var config = {
  driver: "msnodesqlv8",
  server: "WNGAMER100PC",
  database: "tec_software",
  options: {
    trustedConnection: true,
    useUTC: true
  }
};

// Crear una instancia de conexión
const laConexion = new sql.ConnectionPool(config);

async function probarConexion() {
  try {
    await laConexion.connect();
    console.log('Conexión a SQL Server exitosa');
  } catch (error) {
    console.error('Error al conectar a SQL Server:', error);
  } finally {
    laConexion.close(); // Cierra la conexión después de la prueba
  }
}

// Llama a la función para probar la conexión
probarConexion();

module.exports = laConexion;

//ES NECESARIO INSTALAR EL SERVICE PACK DE SQL SERVER 2014: https://www.microsoft.com/es-es/download/details.aspx?id=57474