// Importaciones base
const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');

// Importar modelos para que Sequelize los registre y sincronice
const Product = require('./models/Product');
const User = require('./models/User');
const Class = require('./models/Class');
const Agenda = require('./models/Agenda');
const Facturacion = require('./models/Facturacion');

// Importar rutas
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const facturacionRoutes = require('./routes/facturacionRoutes');

// Inicializar aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());             // Permite peticiones desde otros dominios
app.use(express.json());     // Permite leer JSON en el cuerpo de las peticiones

// Ruta raíz de prueba
app.get('/', (req, res) => {
    res.send('✅ API funcionando correctamente');
});

// Registrar rutas de la API
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/agenda', agendaRoutes);
app.use('/api/facturacion', facturacionRoutes);

// Iniciar servidor y sincronizar base de datos
async function startServer() {
    try {
        // Sincroniza modelos con la base de datos
        // { force: false } -> no borra datos al reiniciar
        // { force: true } -> recrea tablas (solo usar durante desarrollo)
        await sequelize.sync({ force: false });

        console.log('🗄️  Base de datos sincronizada correctamente.');
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar el servidor:', error);
    }
}

startServer();
