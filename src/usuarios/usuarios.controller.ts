import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {Response} from 'express';//lleva corchetes
import LoginUsuarioDto from './dto/login-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService,
) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
  @Post('login')
  async login(
    @Body() loginUsuarioDto: LoginUsuarioDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.usuariosService.login(loginUsuarioDto);
    console.log(token)
    // Establecer la cookie en la respuesta
    response.cookie('token', token.token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production', // Asegúrate de usar secure en producción
      sameSite: 'strict',
      maxAge: 30000, // 30 segundos
    });

    return { message: 'bienvenido' }; // Devuelve un objeto JSON simple
  }

  

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(id);
  }
}
