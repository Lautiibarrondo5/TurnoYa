const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("./generated/prisma");

const app = express();
const PORT = 3000;

const prisma = new PrismaClient();

// Midsslewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "¡El servidor de TurnoYa está funcionando!",
    });
});

app.get("/api/estado", (req, res) => {
res.json({
conectado: true,
mensaje: "Frontend y backend preparados para comunicarse."
});
});

// Comprobar conexión
app.get("./api/estado", (req, res) => {
    res.json({
        conectado: true,
        mensaje: "Frontend y backend preparados para comunicarse.",
    });
});

// Registrar usuarios
app.post("/api/registro", async (req, res) => {
    try {
        const { nombre, apellido, email, password} = req.body;

        //Validar campos
        if (!nombre || !apellido || !email || !password) {
            return res.status(400).json({
                mensaje: "Todos los campos son obligatorios.",
            });
        }

        //Validar longitud de contraseña
        if (password.lenght < 8) {
            return res.status(400).json({
                mensaje: "La contraseña debe tener al menos 8 caracteres.",
            });
        }

        // Normalizar correo 
        const emailNormalizado = email.trim().toLowerCase();

        // Cmprobar si el correo ya está registrado
        const usuarioExistente = await prisma.usuario.findUnique({
            where: {
                email: emailNormalizado,
            },
        });

        if (usuarioExistente) {
            return res.status(409).json({
                mensaje: "Este correo electrónico ya está registrado.",
            });
        }

        //Proteger contraseña
        const passwordHash = await bcrypt.hash(password, 12);

        // Guardar usuario en PostgreSQL
        const nuevoUsuario = await prisma.usuario.create({
            data: {
                nombre: nombre.trim(),
                apellido: apellido.trim(),
                email: emailNormalizado,
                password: passwordHash,
            },
            select: {
                id: true,
                nombre: true,
                apellido: true,
                email: true,
                createdAt: true,
            },
        });

        return res.status(201).json({
            mensaje: "¡Tu cuenta se creó correctamente!",
            usuario: nuevoUsuario,
        });
}  catch (error) {
  console.error("Error al registrar usuario:");
  console.error(error);
  console.error(error?.message);
  
  return res.status(500).json({
    mensaje: "Ocurrió un error al crear la cuenta."
  });
}
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(
        `Servidor de TurnoYa funcionando en http://localhost:${PORT}`
    );
});