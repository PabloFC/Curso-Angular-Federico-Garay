import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // permitir todos los dominios
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/lugares", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const contenidoArchivo = await fs.readFile("./data/lugares.json");

  const datosLugares = JSON.parse(contenidoArchivo);

  res.status(200).json({ lugares: datosLugares });
});

app.get("/lugares-usuario", async (req, res) => {
  const contenidoArchivo = await fs.readFile("./data/lugares-usuario.json");

  const lugares = JSON.parse(contenidoArchivo);

  res.status(200).json({ lugares });
});

app.put("/lugares-usuario", async (req, res) => {
  const idLugar = req.body.placeId;

  const contenidoArchivo = await fs.readFile("./data/lugares.json");
  const datosLugares = JSON.parse(contenidoArchivo);

  const lugar = datosLugares.find((lugar) => lugar.id === idLugar);

  const contenidoArchivoLugaresUsuario = await fs.readFile(
    "./data/lugares-usuario.json",
  );
  const datosLugaresUsuario = JSON.parse(contenidoArchivoLugaresUsuario);

  let lugaresUsuarioActualizados = datosLugaresUsuario;

  if (!datosLugaresUsuario.some((p) => p.id === lugar.id)) {
    lugaresUsuarioActualizados = [...datosLugaresUsuario, lugar];
  }

  await fs.writeFile(
    "./data/lugares-usuario.json",
    JSON.stringify(lugaresUsuarioActualizados),
  );

  res.status(200).json({ lugaresUsuario: lugaresUsuarioActualizados });
});

app.delete("/lugares-usuario/:id", async (req, res) => {
  const idLugar = req.params.id;

  const contenidoArchivoLugaresUsuario = await fs.readFile(
    "./data/lugares-usuario.json",
  );
  const datosLugaresUsuario = JSON.parse(contenidoArchivoLugaresUsuario);

  const indiceLugar = datosLugaresUsuario.findIndex(
    (lugar) => lugar.id === idLugar,
  );

  let lugaresUsuarioActualizados = datosLugaresUsuario;

  if (indiceLugar >= 0) {
    lugaresUsuarioActualizados.splice(indiceLugar, 1);
  }

  await fs.writeFile(
    "./data/lugares-usuario.json",
    JSON.stringify(lugaresUsuarioActualizados),
  );

  res.status(200).json({ lugaresUsuario: lugaresUsuarioActualizados });
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ mensaje: "404 - No Encontrado" });
});

app.listen(3000);
