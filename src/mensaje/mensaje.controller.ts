import { Controller, Get } from '@nestjs/common';

@Controller('mensaje')
export class MensajeController {
  @Get()
  obtenerMensaje(): string {
    return 'Este es mi primera aplicación en Nest';
  }
}
