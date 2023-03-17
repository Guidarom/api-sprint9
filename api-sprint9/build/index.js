'use strict';
const __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware para transformar la req. body a json, evita hacer transformación a mano de lo que envias a los endpoints de la API
const PORT = 3000;
app.get('/ping', (_req, res) => {
	console.log('Someone has pingued over here');
	res.send('pong');
});
app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`);
});
