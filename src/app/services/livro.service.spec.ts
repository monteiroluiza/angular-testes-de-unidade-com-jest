import { LivroService } from "./livro.service"

describe('LivroService', () => {
  let service: LivroService; //arrange

  it('deveria ser criado', ()=>{
    service = new LivroService();
    expect(service).toBeTruthy();
  }) //act

  //AAA -  ARRANGE, ACT, ASSERT (monta o cenário, teste propriamente dito, validação)
})
