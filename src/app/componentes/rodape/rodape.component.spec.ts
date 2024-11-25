import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RodapeComponent],
    });
    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
  });

  it('deveria definir as propriedades alt e src', () => {
    expect(component.src).toBeDefined();
    expect(component.alt).toBeDefined();
  });

  it('deveria renderizar o conteudo baseado nas propriedades src e alt', () => {
    component.alt = 'Imagem teste';
    component.src = 'https://example.com/test-image.jpg';
    expect(component).toMatchSnapshot();
  })
});
