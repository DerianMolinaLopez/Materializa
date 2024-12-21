import { UsuarioExistenteMiddleware } from './usuario-existente.middleware';

describe('UsuarioExistenteMiddleware', () => {
  it('should be defined', () => {
    expect(new UsuarioExistenteMiddleware()).toBeDefined();
  });
});
